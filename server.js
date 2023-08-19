const express = require("express");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");
const authRoutes = require("./controllers/authController");
const session = require("express-session");
const cakepopRoutes = require("./controllers/cakepopController");


app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(expressLayouts);
app.use(session({ secret: "timeout", cookie: { maxAge: 3600000 }}));





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);
app.use(cakepopRoutes);

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });
mongoose.connection.on("connected", ()=> console.log("yay connected"));
mongoose.connection.on("error", ()=> console.log("oh no error"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});
 app.use((req, res, next) =>{
    if(!req.session.userId){
        res.redirect("/login");
        return;
    }

    next();
 });

 app.use("/cakepop", cakepopRoutes);

app.listen(PORT, () => console.log("Hello, from port:", PORT));
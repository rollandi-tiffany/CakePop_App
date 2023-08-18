const express = require("express");
const app = express();
const PORT = 3000;
//const expressLayouts = require("express-ejs-layouts");
const authRoutes = require("./controllers/authController");

app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
//app.use(expressLayouts);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);

app.get("/", (req, res) => {
    res.render("home.ejs");
});



app.listen(PORT, () => console.log("Hello, from port:", PORT));
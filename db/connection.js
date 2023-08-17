const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://torresrtiffany:securepassword@sei.jech8aq.mongodb.net/cakepop-app");

mongoose.connection.on("connected", ()=> console.log("yay connected"));
mongoose.connection.on("error", ()=> console.log("oh no error"));

module.exports = mongoose;
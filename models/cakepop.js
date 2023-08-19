const mongoose = require("mongoose");

const cakepopSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,

});

const Cakepop = new mongoose.model("Cakepop", cakepopSchema);

module.exports = Cakepop;
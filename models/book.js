const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  platform: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Book", bookSchema);

module.exports = Game;

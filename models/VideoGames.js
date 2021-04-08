const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoGameSchema = new Schema({
  apiGameId: {type: String},
  text: { type: String  },
  rating: { type: String },
  releaseDate: {type: String},
  ratingNumber: { type: String },
  label: { type: String},
  path: { type: String },
});

const VideoGames = mongoose.model("VideoGames", videoGameSchema);

module.exports = VideoGames;



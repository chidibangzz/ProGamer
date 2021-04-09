const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoGameSchema = new Schema({
  id: {type: String},
  label: { type: String  },
  background_image: { type: String  },
  logo: { type: String },
  name: {type: String},
  released: { type: String },
  releaseDate: { type: String},
  rating: { type: String },
  ratingNumber: { type: String }
});

const VideoGames = mongoose.model("VideoGames", videoGameSchema);

module.exports = VideoGames;



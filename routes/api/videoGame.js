const router = require("express").Router();
const VideoGamesController = require("../../controllers/videoGamesController");

// Matches with "/api/books"
router.route("/")
  .get(VideoGamesController.findAll)
  .post(VideoGamesController.create);

// Matches with "/api/books/:id"
//router
  //.route("/:id")
  //.get(VideoGamesController.findById)
  //.put(VideoGamesController.update)
  //.delete(VideoGamesController.remove);

module.exports = router;

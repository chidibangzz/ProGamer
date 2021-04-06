const router = require("express").Router();
const bookRoutes = require("./books");
const videoGameRoutes = require("./videoGame");

// Book routes
router.use("/books", bookRoutes);
router.use("/videoGames", videoGameRoutes);




module.exports = router;

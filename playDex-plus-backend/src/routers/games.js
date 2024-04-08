const express = require("express");
const router = express.Router();
const {
  seedGames,
  getAllGames,
  addFavourites,
  updateBook,
  removeBook,
} = require("../controllers/games");

router.get("/game_info/seed", seedGames);
router.get("/game_info", getAllGames);
router.put("/favourites", addFavourites);
router.patch("/appointments/:id", updateBook);
router.delete("/appointments/:id", removeBook);

module.exports = router;

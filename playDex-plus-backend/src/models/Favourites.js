const mongoose = require("mongoose");

const FavListSchema = new mongoose.Schema(
  {
    username: { type: String },
    games: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Games",
    },
  },
  { collection: "favourites" }
);

module.exports = mongoose.model("Favourites", FavListSchema);

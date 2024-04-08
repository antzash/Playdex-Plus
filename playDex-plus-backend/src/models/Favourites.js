const mongoose = require("mongoose");

const FavListSchema = new mongoose.Schema(
  {
    name: { type: String },
    username: { type: String },
    id: { type: Number },
  },
  { collection: "favourites" }
);

module.exports = mongoose.model("Favourites", FavListSchema);

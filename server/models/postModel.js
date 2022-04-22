import mongoose from "mongoose";

const gamesSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   creator: {
      type: String,
      required: true
   },
   image: String,
   likedCount: {
      type: Number,
      default: 0
   },
   tags: [String],
});

const GamesPost = mongoose.model("GamesPost", gamesSchema);

export default GamesPost;
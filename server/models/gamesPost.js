import mongoose from "mongoose";

const gamesSchema = mongoose.Schema({
   name: String,
   title: String,
   // description: String,
   // creator: String,
   // image: String,
   // likedCount: {
   //    type: Number,
   //    default: 0
   // },
   // tags: [String],
});

const GamesPost = mongoose.model("GamesPost", gamesSchema);

export default GamesPost;
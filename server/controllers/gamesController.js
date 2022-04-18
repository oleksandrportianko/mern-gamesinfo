import GamesPost from "../models/postModel.js";

export const getPosts = async (req, res) => {
   try {
      const gamesPost = await GamesPost.find();

      res.status(200).json(gamesPost);
   }
   catch(error) {
      res.status(404).json({ message: error.message });
   }
}

export const createPost = async (req, res) => {
   const gamePost = req.body;

   const newGamePost = new GamesPost(gamePost);
   try {
      await newGamePost.save();
      res.status(201).json(newGamePost);
   }
   catch(error) {
      res.status(409).json({ message: error.message });
   }
}
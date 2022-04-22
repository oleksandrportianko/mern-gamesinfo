import GamesPost from "../models/postModel.js";
import UsersModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
   try {
      const gamesPosts = await GamesPost.find();

      res.status(200).json(gamesPosts);
   }
   catch(error) {
      res.status(404).json({ message: error.message });
   }
}

export const createPost = async (req, res) => {
   try {
      const accessToken = req.cookies.access_token;

      if (!accessToken) {
         return res.status(401).json({ message: 'User is not loggined' });
      }

      const decodedJWT = jwt.decode(accessToken, process.env.JWT_SECRET);
      const user = await UsersModel.findOne({ email: decodedJWT.email}).select('-password');

      await GamesPost.create({
         title: req.body.title,
         description: req.body.description,
         creator: user.nickname,
         image: req.body.image,
         likedCount: 0,
         tags: req.body.tags,
       });;
      
      res.status(201).json({ message: 'Post created' });
   }
   catch(error) {
      res.status(409).json({ message: error.message });
   }
}
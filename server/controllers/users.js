import UsersModel from "../models/User.js";

export const getUser = async (req, res) => {
   try {
      const user = await UsersModel.findOne({ email: req.body.email });

      res.status(200).json(user);
   }
   catch(error) {
      res.status(404).json({ message: error.message });
   }
}

export const createUser = async (req, res) => {
   const { nickname, email, password } = req.body;


}
import UsersModel from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

export const loginUser = async (req, res) => {
  try {
    const user = await UsersModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid user' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
      const token = generateAccessToken(user.email);
      res.cookie('access_token', token , { httpOnly:true, sameSite:true, maxAge: 36000000 });
      res.send({ token });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      await UsersModel.create({
        id: uuidv4(),
        nickname: req.body.nickname,
        email: req.body.email,
        password: newPassword,
      });
      return res.status(200).json({ message: 'User created' });
    } catch (error) {
      return res.status(401).json({ message: 'User with this email or username is already exist' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserData = async (req, res) => {
   try {
      const accessToken = req.cookies.access_token;
      if (!accessToken) {
         return res.status(401).json({ message: 'User is not loggined' });
      }
      const decodedJWT = jwt.decode(accessToken, process.env.JWT_SECRET);
      const user = await UsersModel.findOne({ email: decodedJWT.email}).select('-password');
      return res.status(200).json(user);
   } catch(error) {
      res.status(404).json({ message: error.message });
   }

}

function generateAccessToken(email) {
   return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

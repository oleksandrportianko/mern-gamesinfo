import UsersModel from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getUser = async (req, res) => {
  try {
    const user = await UsersModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid user' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        'secret123',
      );

      return res.status(200).json({user: token});
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      await UsersModel.create({
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

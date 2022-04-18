import express from 'express';
import { getUserData, createUser, loginUser } from '../controllers/usersController.js';

const router = express.Router();

router.post('/api/login', loginUser)
router.post('/api/registration', createUser)
router.get('/api/user_data', getUserData)

export default router;
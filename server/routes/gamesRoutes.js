import express from 'express';
import { getPosts, createPost } from '../controllers/gamesController.js';

const router = express.Router();

router.get('/api/posts', getPosts)
router.post('/api/add_post', createPost)

export default router;
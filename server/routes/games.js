import express from 'express';
import { getGames, createGames } from '../controllers/games.js';

const router = express.Router();

router.get('/api/posts', getGames)
router.post('/api/add_post', createGames)

export default router;
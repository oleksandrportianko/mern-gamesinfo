import express from 'express';
import { getGames, createGames } from '../controllers/games.js';

const router = express.Router();

router.get('/', getGames)
router.post('/', createGames)

export default router;
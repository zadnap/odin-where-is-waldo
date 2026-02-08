import express from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import { createGame, makeGuess } from '../controllers/game.controller.js';

const gameRouter = express.Router();

gameRouter.post('/:mapSlug', asyncHandler(createGame));
gameRouter.post('/:gameId/guess', asyncHandler(makeGuess));

export default gameRouter;

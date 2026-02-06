import express from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import { createScore, getScores } from '../controllers/score.controller.js';

const scoreRouter = express.Router();

scoreRouter.get('/', asyncHandler(getScores));
scoreRouter.post('/', asyncHandler(createScore));

export default scoreRouter;

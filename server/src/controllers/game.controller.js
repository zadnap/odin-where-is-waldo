import gameService from '../services/game.service.js';
import { successResponse } from '../utils/response.js';

const createGame = async (req, res) => {
  const mapSlug = req.params.mapSlug;
  const newGame = await gameService.createGame(mapSlug);

  return successResponse(res, {
    statusCode: 201,
    message: 'Created game successfully',
    data: newGame,
  });
};

const makeGuess = async (req, res) => {
  const gameId = req.params.gameId;
  const { x, y, characterId } = req.body;
  const guessResult = await gameService.makeGuess({
    gameId,
    x,
    y,
    characterId,
  });

  return successResponse(res, {
    data: guessResult,
  });
};

export { createGame, makeGuess };

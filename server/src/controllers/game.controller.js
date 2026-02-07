import gameService from '../services/game.service.js';
import { successResponse } from '../utils/response.js';

const createGame = async (req, res) => {
  const mapId = req.body.mapId;
  const newGame = await gameService.createGame(mapId);

  return successResponse(res, {
    statusCode: 201,
    message: 'Created game successfully',
    data: newGame,
  });
};

const makeGuess = async (req, res) => {
  const gameId = req.params.gameId;
  const { x, y, characterId } = req.body;
  const correct = await gameService.makeGuess({ gameId, x, y, characterId });

  return successResponse(res, {
    data: { correct },
  });
};

export { createGame, makeGuess };

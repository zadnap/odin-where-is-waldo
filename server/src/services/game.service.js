import { prisma } from '../lib/prisma.js';
import AppError from '../utils/AppError.js';

const createGame = async (mapId) => {
  if (!mapId) {
    throw new AppError('MapId is required', 400);
  }

  const map = await prisma.map.findUnique({ where: { id: mapId } });

  if (!map) {
    throw new AppError('MapId not found', 404);
  }

  const newGame = await prisma.game.create({ data: { mapId } });

  return newGame;
};

const makeGuess = async ({ gameId, x, y, characterId }) => {
  if (!gameId) {
    throw new AppError('GameId is required', 400);
  }
  if (
    typeof x !== 'number' ||
    typeof y !== 'number' ||
    x < 0 ||
    x > 1 ||
    y < 0 ||
    y > 1
  ) {
    throw new AppError('Invalid coordinates', 400);
  }
  if (!characterId) {
    throw new AppError('CharacterId is required', 400);
  }

  const game = await prisma.game.findUnique({ where: { id: gameId } });
  if (!game) {
    throw new AppError('Game not found', 404);
  }
  if (game.finishedAt) {
    throw new AppError('Game already finished', 400);
  }

  const character = await prisma.character.findUnique({
    where: { id: characterId },
  });
  if (!character) {
    throw new AppError('Character not found', 404);
  }

  if (character.mapId !== game.mapId) {
    throw new AppError('Character does not belong to this map', 400);
  }

  return (
    x >= character.xMin &&
    x <= character.xMax &&
    y >= character.yMin &&
    y <= character.yMax
  );
};

export default { createGame, makeGuess };

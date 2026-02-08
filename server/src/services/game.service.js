import { prisma } from '../lib/prisma.js';
import AppError from '../utils/AppError.js';

const createGame = async (mapSlug) => {
  if (!mapSlug) {
    throw new AppError('MapSlug is required', 400);
  }

  const map = await prisma.map.findUnique({ where: { slug: mapSlug } });

  if (!map) {
    throw new AppError('Map not found', 404);
  }

  const newGame = await prisma.game.create({
    data: { mapId: map.id },
    include: {
      foundCharacters: true,
      map: {
        include: {
          characters: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });

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

  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: {
      map: {
        include: {
          characters: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
            },
          },
        },
      },
      foundCharacters: {
        include: {
          character: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });

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

  const isCorrect =
    x >= Number(character.xMin) &&
    x <= Number(character.xMax) &&
    y >= Number(character.yMin) &&
    y <= Number(character.yMax);

  if (!isCorrect) {
    return {
      correct: false,
      foundCharacters: game.foundCharacters.map((fc) => fc.character),
      remainingCharacters: game.map.characters.filter(
        (c) => !game.foundCharacters.some((fc) => fc.characterId === c.id)
      ),
      finished: false,
    };
  }

  try {
    await prisma.foundCharacter.create({
      data: { gameId, characterId },
    });

    const foundCharacters = await prisma.foundCharacter.findMany({
      where: { gameId },
      include: {
        character: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    const foundIds = new Set(foundCharacters.map((fc) => fc.characterId));

    const remainingCharacters = game.map.characters.filter(
      (c) => !foundIds.has(c.id)
    );

    let finished = false;

    if (remainingCharacters.length === 0) {
      await prisma.game.update({
        where: { id: gameId },
        data: { finishedAt: new Date() },
      });
      finished = true;
    }

    return {
      correct: true,
      foundCharacters: foundCharacters.map((fc) => fc.character),
      remainingCharacters,
      finished,
    };
  } catch (err) {
    if (err.code === 'P2002') {
      throw new AppError('This character is already found', 409);
    }
    throw err;
  }
};

export default { createGame, makeGuess };

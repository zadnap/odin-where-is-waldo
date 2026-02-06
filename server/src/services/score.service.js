import { prisma } from '../lib/prisma.js';
import AppError from '../utils/AppError.js';
import { getPagination } from '../utils/pagination.js';

const getScores = async ({ mapId, page, limit }) => {
  const pagination = getPagination(page, limit);

  if (!mapId) {
    throw new AppError('MapId is required', 400);
  }

  const where = { game: { mapId } };
  const [scores, total] = await Promise.all([
    prisma.score.findMany({
      take: pagination.limit,
      skip: pagination.skip,
      orderBy: { timeMs: 'asc' },
      where,
    }),
    prisma.score.count({ where }),
  ]);

  const rankedScores = scores.map((score, index) => ({
    ...score,
    rank: pagination.skip + index + 1,
  }));

  return {
    scores: rankedScores,
    meta: {
      page,
      limit,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const createScore = async ({ gameId, playerName, timeMs }) => {
  if (!gameId) {
    throw new AppError('GameId is required', 400);
  }

  if (!playerName?.trim()) {
    throw new AppError('Player name is required', 400);
  }

  if (typeof timeMs !== 'number' || timeMs < 0) {
    throw new AppError('Invalid time ms', 400);
  }

  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { score: true },
  });

  if (!game) {
    throw new AppError('Game not found', 404);
  }

  if (game.finishedAt) {
    throw new AppError('Game already finished', 400);
  }

  if (game.score) {
    throw new AppError('Score already exists for this game', 400);
  }

  return prisma.$transaction(async (tx) => {
    const score = await tx.score.create({
      data: {
        gameId,
        playerName: playerName.trim(),
        timeMs,
      },
    });

    await tx.game.update({
      where: { id: gameId },
      data: {
        finishedAt: new Date(),
      },
    });

    return score;
  });
};

export default { getScores, createScore };

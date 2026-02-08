import { prisma } from '../lib/prisma.js';
import AppError from '../utils/AppError.js';
import { getPagination } from '../utils/pagination.js';

const getScores = async ({ mapSlug, page, limit }) => {
  const pagination = getPagination(page, limit);

  const where = {};

  if (mapSlug) {
    const map = await prisma.map.findUnique({
      where: { slug: mapSlug },
      select: { id: true },
    });

    if (!map) {
      throw new AppError('Map not found', 404);
    }

    where.game = { mapId: map.id };
  }

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

const createScore = async ({ gameId, playerName }) => {
  if (!gameId) {
    throw new AppError('GameId is required', 400);
  }

  if (!playerName?.trim()) {
    throw new AppError('Player name is required', 400);
  }

  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { score: true },
  });
  const timeMs = game.finishedAt - game.startedAt;

  if (!game) {
    throw new AppError('Game not found', 404);
  }

  if (!game.finishedAt) {
    throw new AppError('Game is not finished yet', 400);
  }

  if (game.score) {
    throw new AppError('Score already exists for this game', 400);
  }

  const score = await prisma.score.create({
    data: {
      gameId,
      playerName: playerName.trim(),
      timeMs,
    },
  });

  return score;
};

export default { getScores, createScore };

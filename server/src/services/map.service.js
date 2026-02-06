import { prisma } from '../lib/prisma.js';
import AppError from '../utils/AppError.js';

const getAllMaps = async () => {
  const maps = await prisma.map.findMany();

  return maps;
};

const getMapBySlug = async (slug) => {
  const map = await prisma.map.findUnique({ where: { slug } });

  if (!map) {
    throw new AppError('Map not found', 404);
  }

  return map;
};

export default { getAllMaps, getMapBySlug };

import mapService from '../services/map.service.js';
import { successResponse } from '../utils/response.js';

const getAllMaps = async (req, res) => {
  const maps = await mapService.getAllMaps();

  return successResponse(res, { data: maps });
};

const getMapBySlug = async (req, res) => {
  const slug = req.params.slug;
  const map = await mapService.getMapBySlug(slug);

  return successResponse(res, { data: map });
};

export { getAllMaps, getMapBySlug };

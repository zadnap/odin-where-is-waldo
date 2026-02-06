import scoreService from '../services/score.service.js';
import { successResponse } from '../utils/response.js';

const getScores = async (req, res) => {
  const { scores, meta } = await scoreService.getScores(req.query);

  return successResponse(res, {
    data: scores,
    meta,
  });
};

const createScore = async (req, res) => {
  await scoreService.createScore(req.body);

  return successResponse(res);
};

export { getScores, createScore };

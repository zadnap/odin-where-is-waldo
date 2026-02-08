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
  const score = await scoreService.createScore(req.body);

  return successResponse(res, {
    data: score,
  });
};

export { getScores, createScore };

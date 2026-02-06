import express from 'express';
import { getAllMaps, getMapBySlug } from '../controllers/map.controller.js';
import asyncHandler from '../utils/asyncHandler.js';

const mapRouter = express.Router();

mapRouter.get('/', asyncHandler(getAllMaps));
mapRouter.get('/:slug', asyncHandler(getMapBySlug));

export default mapRouter;

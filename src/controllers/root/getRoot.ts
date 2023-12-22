import { RequestHandler } from 'express';
import config from '../../configs/config.js';

const getRoot: RequestHandler = (_req, res) => {
  res.status(200).json({
    name: config.name,
    description: config.description,
    version: config.version,
    author: config.author,
    nodeEnv: config.nodeEnv,
    origin: process.env.PROD_ORIGIN,
  });
};

export default getRoot;

import express, { ErrorRequestHandler, RequestHandler } from 'express';
import config from '../configs/config.js';

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  console.error(err);
  return res.status(500).json({
    message: config.nodeEnv === 'production' ? 'unknown error' : `${err}`,
  });
};

const fourOhFour: RequestHandler = (_req, res) => {
  return res.status(404).json({ message: 'not found' });
};

export const setupErrorHandlers = (app: express.Application) => {
  app.use(fourOhFour);
  app.use(errorHandler);
};

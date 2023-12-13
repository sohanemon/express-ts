import express from 'express';
import routeHandlers from '../handler.js';
import { setupErrorHandlers } from '../middleware/errorHandler.js';
import { setupGlobalMiddleware } from '../middleware/global.js';

const app = express();

// middleware must be at first
setupGlobalMiddleware(app);

// routes must be at middle
await routeHandlers(app);

// error handling must be at last
setupErrorHandlers(app);

export default app;

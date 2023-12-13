import express from 'express';
import routeHandlers from '../handler.js';
import { setupErrorHandlers } from '../middleware/errorHandler.js';
import { setupGlobalMiddlewares } from '../middleware/global.js';

const app = express();

// middleware must be at first
setupGlobalMiddlewares(app);

// routes must be at middle
await routeHandlers(app);

// error handlers must be at last
setupErrorHandlers(app);

export default app;

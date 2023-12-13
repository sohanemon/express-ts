import express from 'express';
import useRoutes from '../handler.js';
import { setupErrorHandlers } from '../middleware/errorHandler.js';
import { setupGlobalMiddleware } from '../middleware/global.js';

const app = express();

// middleware must be at first
setupGlobalMiddleware(app);

useRoutes(app);

// error handling must be at last
setupErrorHandlers(app);

export default app;

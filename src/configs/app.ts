import express from 'express';
import { setupErrorHandlers } from '../middleware/errorHandler.js';
import { setupGlobalMiddleware } from '../middleware/global.js';
import root from '../routes/root.js';

const app = express();

// middleware must be at first
setupGlobalMiddleware(app);

app.use('/', root);

// error handling must be at last
setupErrorHandlers(app);

export default app;

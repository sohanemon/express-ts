import config from '../configs/config.js';
const error = (err, _req, res) => {
    console.error(err);
    return res.status(500).json({
        message: config.nodeEnv === 'production' ? 'Something went wrong' : `${err}`,
    });
};
const notFound = (_req, res) => {
    return res.status(404).json({ message: 'Route not found' });
};
export const setupErrorHandlers = (app) => {
    app.use(notFound);
    app.use(error);
};

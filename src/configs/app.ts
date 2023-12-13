import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import root from '../routes/root.js';
import errorHandler from '../middleware/errorHandler.js';
import fourOhFour from '../middleware/fourOhFour.js';

const app = express();

// middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use(helmet());
app.use(morgan('tiny'));

// routes middle
app.use('/', root);

// error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import errorHandler from 'middleware/errorHandler.js';
import fourOhFour from 'middleware/fourOhFour.js';
import morgan from 'morgan';
import root from 'routes/root.js';

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use(helmet());
app.use(morgan('tiny'));

// Apply routes before error handling
app.use('/', root);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;

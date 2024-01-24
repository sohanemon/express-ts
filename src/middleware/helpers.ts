import cookieParser from 'cookie-parser';
import cors from 'cors';
import { json, static as staticFolder, urlencoded, Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export const setupHelpers = (app: Application) => {
  app
    .use(json())
    .use(staticFolder('public'))
    .use(urlencoded({ extended: true }))
    .use(cookieParser())
    .use(cors())
    .use(helmet())
    .use(morgan('tiny'));
};

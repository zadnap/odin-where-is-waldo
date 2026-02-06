import express from 'express';
import cors from 'cors';
import { allowedOrigins } from './config/cors.config.js';
import errorHandler from './middlewares/error-handler.middleware.js';
import { mapRouter, scoreRouter } from './routes/index.js';

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS blocked'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use('/maps', mapRouter);
app.use('/scores', scoreRouter);

app.use(errorHandler);

export default app;

import express from 'express';
import cors from 'cors';
import ApiRouter from './routes';

const server = express();

server.use(cors());
server.use('/api', ApiRouter);

export default server;

import express from 'express';
import { planets, singlePlanet, buy } from '../controllers';

const ApiRouter = express.Router();

ApiRouter.get('/planets/', planets);
ApiRouter.get('/planets/:id', singlePlanet);
ApiRouter.post('/buy/:id', buy);

export default ApiRouter;

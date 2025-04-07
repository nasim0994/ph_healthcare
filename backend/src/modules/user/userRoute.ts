import express from 'express';
import { getAllUserController } from './userController';
const Router = express.Router();

Router.get('/all', getAllUserController);

export const userRoute = Router;

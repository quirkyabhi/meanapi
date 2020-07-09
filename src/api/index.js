import express from 'express';
import {userRouter} from './resources/users/user.router';
import {transactionRouter } from './resources/transactions/transaction.router'
export const restRouter = express.Router();
restRouter.use('/users',userRouter);
restRouter.use('/transactions',transactionRouter);

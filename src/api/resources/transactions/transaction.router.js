const express = require('express')
import transactionController  from "./transaction.controller";
export const transactionRouter = express.Router();

transactionRouter.route('/').get(transactionController.findAll)
transactionRouter.route('/')
.post(transactionController.create)
.get(transactionController.findAll)

transactionRouter.route('/myTransactions/:id').get(transactionController.findMyTransaction)
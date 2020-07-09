import Transaction from './transaction.model';
import transactionService from './transaction.service';

export default {
    findAll(req,res){
        Transaction.find().then(data=>res.json(data))
        .catch(
            err => res.status(500).json(err)
        );
    },
    async create(req, res){
        try {
            const {error, value} = transactionService.validationSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
        await Transaction.create(value)
        .then(employee => res.json(employee))
        .catch(err=> res.status(500).json(err));
        
            console.log(value)
        } catch (error) {
            console.log(error)
        }
  
    },
}
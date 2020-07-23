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
    findMyTransaction(req, res,next){
        let {id} = req.params;
        const {page =1, perPage=10}= req.query;
        const options={
            page: parseInt(page,10),
            limit:parseInt(perPage,10),
            populate:'userId refId'
        }

        // Transaction.find({'userId':id}).then(
        //     data => res.json(data)
        // )
        Transaction.paginate({'userId':id},options).then(
            data => res.json(data)
        )
        .catch(
            err => res.status(500).json(err)
        )
    }
}
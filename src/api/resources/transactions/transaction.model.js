import mongoose from 'mongoose'
import User from '../users/user.model'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema;
const transactionSchema= new Schema({
    userId: { 
        ref:'User', 
        type:Schema.Types.ObjectId, 
        required: true 
    },
    refId:{
        ref:'User',
        type:Schema.Types.ObjectId,
        required: true
    },
    transferAmount:{
        type: Number,
        required: true
    },
    transactionType:{
        type:String,
        required: true
    },
    initialAmount:{
        type: Number,
        required: true
    },
    date: {
        type:Date,
        required: true
    }
},{collection: 'transactions'});

transactionSchema.plugin(mongoosePaginate)
export default new mongoose.model('Transaction',transactionSchema);
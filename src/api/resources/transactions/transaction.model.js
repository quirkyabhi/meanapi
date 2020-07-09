import mongoose from 'mongoose'
import User from '../users/user.model'
const Schema = mongoose.Schema;
const transactionSchema= new Schema({
    userId: { 
        ref:'User', 
        type:Schema.Types.ObjectId, 
        required: true 
    },
    refId:{
        red:'User',
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
export default new mongoose.model('Transaction',transactionSchema);
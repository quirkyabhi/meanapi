import mongoose from 'mongoose'
const schema = mongoose.Schema;
const empSchema= new schema(
    {   
        // no:{type: Number, required: true},
        name: { type:String, required: true},
        email: { type:String, required: true},
        password: { type:String, required: true},
        amount: { type:Number, required: true},

        // salary: { type:Number, required: true},
        role:{ type:String}
        // age: { type:Number , required: true},
        // gender: { type:String , required: true}
    }
,
{collection:'users'}
)

export default mongoose.model('User',empSchema)
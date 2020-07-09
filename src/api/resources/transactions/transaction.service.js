import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            userId: Joi.string().required(),
            refId: Joi.string().required(),
            transferAmount:Joi.number().required(),
            initialAmount: Joi.number().required(),
            transactionType: Joi.string().required(),
            date: Joi.date().required(),


        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    }
}
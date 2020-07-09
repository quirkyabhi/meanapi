import User from './user.model'
import userService from './user.service';
import { response } from 'express';
export default{
    findAll(req,res){
        // res.json({msg:"find all users"});
        User.find().then(employee=>res.json(employee))
        .catch(
            err => res.status(500).json(err)
        )
    },
    findOne(req,res){
        const id = req.params.id
        User.findById(id).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"employee not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },
    findOne(req,res){
        const id = req.params.id
        User.findByIdAndRemove(id).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"employee not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },
    update(req,res){
        const id = req.params.id
        User.findByIdAndUpdate({_id:id},{$set:req.body},{new: true}).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"employee not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },
   create(req, res){
        let{name,email, role, amount, password}= req.body;
        if(!name){
            return res.status(400).json(
                { err:"name is required."}
            );
        }
        if (!email) {
            return res.status(400).json({err:"salary is required."});
        }
        if (!no) {
            return res.status(400).json({err:"no is required."});
        }
        if (!role) {
            return res.status(400).json({err:"role is required."});
        }
        if (!amount) {
            return res.status(400).json({err:"age is required."});
        }
        if (!password) {
            return res.status(400).json({err:"gender is required."});
        }
        
    },
    async signup(req, res){
        try {
            const {error, value} = userService.validationSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
        await User.create(value)
        .then(employee => res.json(employee))
        .catch(arr=> res.status(500).json(err));
        
            console.log(value)
        } catch (error) {
            console.log(error)
        }

    },
    async login(req, res){
        try {
            const {error, value} = userService.validationLoginSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
            const user = await User.findOne({email: value.email});
            if(!user){
                return res.status(400).json({err:"Invalid Email"})
            }
            else if(user.password != value.password){
                return res.status(400).json({err:"Invalid Password"})
            }
            else{
                console.log(value)
                return res.json(
                     user
                );
            }
            
        } catch (error) {
            console.log(error)
        }

    }

};
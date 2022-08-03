const User=require('../models/UserModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
exports.register = async (req,res,next)=>{
    try{
        if (req.body.Password!=req.body.Password1){
            const err= new Error('Your confirm password is incorrect');
            err.statusCode=400;
            return next(err);
        }
        const user = await User.create(req.body);
        const token=jwt.sign({userID:user._id},process.env.APP_SECRET)
        res.status(200).json({
            status:'success',
            data:{token, userName: user.name}
        })
    } catch(error){
        next(error);
    }
}
exports.login= async (req,res,next)=>{
    try{
        const user =await User.findOne({email:req.body.email});
        if (!user){
           // error: Email is not correct
            const err= new Error('Email is not correct');
            err.statusCode=400;
            return next(err);
        }
        if(bcrypt.compareSync(req.body.Password, user.Password)){
            const token=jwt.sign({userID:user._id},process.env.APP_SECRET);
            res.status(200).json({
                status:'success',
                data:{
                    token, userName: user.name
                }
            })        
        }
        else{
           // Error: Password is not correct
            const err= new Error('Password is not correct');
            err.statusCode=400;
            return next(err);
        }
    }
    catch(error){
        res.json(error);
    }
}
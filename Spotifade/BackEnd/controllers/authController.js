const User=require('../models/UserModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
exports.register = async (req,res,next)=>{
    try{
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
//get current user
exports.getCurrentUser= async (req,res,next)=>{
    try{
        const data={user:null};
        if (req.user){
            const user = await User.findOne({_id:req.user.userID});
            data.user={userName:user.name };
        }
        res.status(200).json({
            status:'success',
            data: data
        })
    }catch(error){
        res.json(error);
    }
}
// Get all user
exports.getAllUsers=async (req,res,next)=>{
    try {
        const users=await User.find({}).select('name');
        res.status(200).json({
            status:'success',
            data: {users}
        })
    } catch (error) {
        next(error);
    }
}
// Delete user
exports.deleteOneUser=async(req,res,next)=>{
    try {
        const {userID}=req.params;
        const user=await User.findByIdAndDelete(userID)
        res.status(200).json({
            status:'success',
            result:'User has been deleted'
        })
    } catch (error) {
        
    }
}
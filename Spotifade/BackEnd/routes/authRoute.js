const express=require('express');
const {register,login, getCurrentUser, getAllUsers, deleteOneUser}=require('../controllers/authController');
const { checkCurentUser } = require('../middleware/checkCurrentUser');
const {verifytoken}=require('../middleware/verifytoken');
const Router=express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/').get(checkCurentUser,getCurrentUser)
Router.route('/admin').get(verifytoken,getAllUsers)
Router.route('/admin/:userID').delete(verifytoken,deleteOneUser)
module.exports=Router;
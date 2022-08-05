const express=require('express');
const {register,login, getAllUsers, deleteOneUser,getCurrentUser}=require('../controllers/authController');
const { verifytoken } = require('../middleware/verifytoken');
const {checkCurentUser}=require('../middleware/checkCurrentUser')
const Router=express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/').get(checkCurentUser,getCurrentUser)
Router.route('/admin').get(verifytoken,getAllUsers);
Router.route('/admin/:userID').delete(verifytoken,deleteOneUser)

module.exports=Router;
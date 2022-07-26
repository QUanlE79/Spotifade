const express=require('express');
const {getAllSongs,createOneSong,updateOneSong,deleteOneSong}=require('../controllers/songController.js');
const {verifytoken}=require('../middleware/verifytoken');
const Router=express.Router();

Router.route('/').get(getAllSongs).post(verifytoken, createOneSong);
Router.route('/:songId').put(verifytoken, updateOneSong).delete(verifytoken, deleteOneSong);

module.exports=Router;
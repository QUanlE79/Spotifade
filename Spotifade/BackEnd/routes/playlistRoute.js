const express=require('express');
const {getAllPlaylists,createOnePlaylist,updateOnePlaylist,deleteOnePlaylist}=require('../controllers/playlistController');
const {verifytoken}=require('../middleware/verifytoken');
const Router=express.Router();

Router.route('/').get(getAllPlaylists).post(verifytoken, createOnePlaylist);
Router.route('/:playlistID').put(verifytoken, updateOnePlaylist).delete(verifytoken, deleteOnePlaylist);

module.exports=Router;
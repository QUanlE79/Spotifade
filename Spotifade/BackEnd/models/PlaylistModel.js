const mongoose=require('mongoose');
const user=require("../models/UserModel");
const Song=require("../models/SongModel");
const Playlistschema = new mongoose.Schema({
    name:{type: String, trim:true, required:[true,'Playlist name is required']},
    Song:{type:mongoose.Schema.Types.ObjectId,
        ref:'Song'},
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
     
    

},{timestamps:true})
module.exports=mongoose.model('Playlist',Playlistschema)   
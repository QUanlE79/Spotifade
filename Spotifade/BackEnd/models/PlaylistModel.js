const mongoose=require('mongoose');
const user=require("../models/UserModel");
const song=require("../models/SongModel");
const Playlistschema = new mongoose.Schema({
    name:{type: string, trim:true, required:[true,'Playlist name is required']},
    Song:[song],
    user:
    {type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
     
    

},{timestamps:true})
module.exports=mongoose.model('Playlist',Playlistschema)   
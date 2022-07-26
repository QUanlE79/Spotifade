const mongoose=require('mongoose')
const user=require("\UserModel")
const Playlistschema = new mongoose.Schema({
    user:
    {type:mongoose.Schema.Types.ObjectId,
        required:[true,'Missing user ID'],
        ref:'User'

    },
    name:{type: string, trim:true, required:[true,'Song\'s name is required']}, 
    Song:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true,'Playlist cannot empty'],
        ref:'Song'    
    }

})
module.exports=mongoose.model('Playlist',Playlistschema)   
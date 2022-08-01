const Playlist=require('../models/PlaylistModel');
//
exports.getAllPlaylists = async (req,res,next)=>{
    try{
        const playlists= await Playlist.find({}).populate('user');
        res.status(200).json({
            status:'success',
            result:playlists.song.length,
            data:{playlists}
        })
    } catch(error){
        res.json(error);
    }
}
//create One song
exports.createOnePlaylist = async (req,res,next)=>{
    try{
        const {userId}=req.user;
        const playlist=await Playlist.create({...req.body,user:userId});
        res.status(200).json({
            status:'success',
            data:{playlist}
        })
    } catch(error){
        next(error);
    }
}
//Update One song
exports.updateOnePlaylist = async (req,res,next)=>{
    try{
        const {songId}=req.params;
        const song= await Song.findByIdAndUpdate(songId,{...req.body},{new:true,runValidator:true});
        res.status(200).json({
            status:'success',
            data:{song}
        })
    } catch(error){
        next(error);
    }
}
//Delete One song
exports.deleteOnePlaylist = async (req,res,next)=>{
    try{
        const {playlistId}=req.params;
        const song= await Song.findByIdAndDelete(playlistId);
        res.status(200).json({
            status:'success',
            result:'song has been deleted'
        })
    } catch(error){
        next(error);
    }
}
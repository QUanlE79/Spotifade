const Song=require('../models/SongModel');
//
exports.getAllSongs = async (req,res,next)=>{
    try{
        const songs= await Song.find({}).populate('author');
        res.status(200).json({
            status:'success',
            result:songs.length,
            data:{songs}
        })
    } catch(error){
        res.json(err);
    }
}
//create One song
exports.createOneSong = async (req,res,next)=>{
    try{
        const {userId}=req.user;
        const song=Song.create({...req.body});
        res.status(200).json({
            status:'success',
            data:{song}
        })
    } catch(error){
        res.json(err);
    }
}
//Update One song
exports.updateOneSong = async (req,res,next)=>{
    try{
        const {songId}=req.user;
        const song= await Song.findByIdAndUpdate(songId,{...req.body},{new:true,runValidator:true});
        res.status(200).json({
            status:'success',
            data:{song}
        })
    } catch(error){
        res.json(err);
    }
}
//Delete One song
exports.deleteOneSong = async (req,res,next)=>{
    try{
        const {songId}=req.user;
        const song= await Song.findByIdAndDelete(songId);
        res.status(200).json({
            status:'success',
            result:'song has been deleted'
        })
    } catch(error){
        res.json(err);
    }
}
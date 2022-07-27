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
        res.json(error);
    }
}
//create One song
exports.createOneSong = async (req,res,next)=>{
    try{
        const {userId}=req.user;
        const song=await Song.create({...req.body});
        console.log('after');
        res.status(200).json({
            status:'success',
            data:{ song }
        })
    } catch(error){
        next(error);
    }
}
//Update One song
exports.updateOneSong = async (req,res,next)=>{
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
exports.deleteOneSong = async (req,res,next)=>{
    try{
        const {songId}=req.params;
        const song= await Song.findByIdAndDelete(songId);
        res.status(200).json({
            status:'success',
            result:'song has been deleted'
        })
    } catch(error){
        next(error);
    }
}
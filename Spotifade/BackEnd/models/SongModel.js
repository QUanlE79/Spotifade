const mongoose=require('mongoose')
const Songschema = new mongoose.Schema({
    name:{type: String, trim:true, required:[true,'Name is required']}, 
    author:{type: String,trim:true,required:[true,'Author must be required']},
    Audio_Url:{type: String,trim:true,required:[true,'Audio_url must be required']}

},{timestamps:true})
module.exports = mongoose.model('Song', Songschema)   
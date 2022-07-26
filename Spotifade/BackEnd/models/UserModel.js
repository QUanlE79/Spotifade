const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const Userschema = new mongoose.Schema({
    name:{type: String,unique:true, trim:true, required:[true, 'Name must be required']}, 
    email:{type: String,unique:true, trim:true, required:[true, 'Email must be required']},
    Password:{type: String,trim:true,required:[true,'Password must be require'], 
    minlength:[6,'Password must be at least 6 characters']}
    // Playlist:{type:mongoose.Schema.Types.ObjectID,
    //     ref:'Playlist'
    // }
},{timestamps:true})
Userschema.pre('save', function(next){
    let user=this;
    bcrypt.hash(user.Password,10,function(error,hash){
        if(error){
            return next(error);
        }else{
            user.Password=hash; 
            next();
        }
    })
})
module.exports = mongoose.model('User', Userschema)
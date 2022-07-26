const jwt=require('jsonwebtoken');
exports.verifytoken=(req,res,next)=>{
    //Access Authorization from req header
    const Authorization=req.header('authorization');

    if(!Authorization){
        //error: unauthorized

    }
    //get token
    const token= Authorization.replace('Bearer ','');

    // Verify token
    const{userId}=jwt.verify(token,process.env.APP_SECRET);
    // Assign req
    req.user={userId};
    next();
}
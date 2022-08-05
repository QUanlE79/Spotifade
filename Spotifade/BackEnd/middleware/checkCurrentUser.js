const jwt= require('jsonwebtoken');

exports.checkCurentUser=(req,res,next)=>{
    const Authorization=req.header("authorization");
    
    if(!Authorization){
        req.user=null;
        next();
    }
    else{
        const token=Authorization.replace('Bearer ','');
        //verify token
        try{
            const  {userID} =jwt.verify(token,process.env.APP_SECRET);
            req.user={userID};
            next();
        }
        catch(err){
            req.user=null;
            next();
        }
    }
}
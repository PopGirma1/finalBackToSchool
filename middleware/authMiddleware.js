const jwt=require('jsonwebtoken')
const authAdmin=(req,res,next)=>{
    const tocken=req.cookies.jwt;
    if(tocken){
        jwt.verify(tocken,"secret-key",(err,decodedTocken)=>{
            if(err){
                console.log("failed to autenticate user")
            }else{
                console.log("Admin  authenticated true",decodedTocken)
                next()
            }
        })
    }else{
        console.log("failed to autenticate admin")
    }
}

module.exports={authAdmin};
const jwt=require('jsonwebtoken')
const authAdmin=(req,res,next)=>{
    const tocken=req.cookies.jwt;
    if(tocken){
        jwt.verify(tocken,"secret-key",(err,decodedTocken)=>{
            if(err){
                console.log("failed to autenticate admin")
                return
            }else{
                console.log("Admin  authenticated true",decodedTocken)
                next()
            }
        })
    }else{
        console.log("failed to autenticate admin")
        return 
    }
}

module.exports={authAdmin};
const Admin = require('../models/adminModel')
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const maxAge= 3 * 24 * 64 * 64;

const createTocken=(id)=>{
    return jwt.sign({id},"secret-key",{expiresIn:maxAge})
}

const createAccount=async (req,res)=>{

      const firstName=req.body.firstName
      const lastName=req.body.lastName
      const email=req.body.email
      const password=await bcrypt.hashSync(req.body.password,await bcrypt.genSalt())

      try {
          const adminn=await Admin.create({firstName,lastName,email,password})
          if(adminn){
            const tocken= createTocken(adimn._id)
            res.cookie('jwt',tocken,{httpOnly:true,maxAge:maxAge*1000})
            res.status(200).json({adimn:adimn._id,tocken})
            console.log("successfully created admin")
          }else{
              console.log("Error while creating admin")
              throw Error("Failed to create admin")
          }
      }catch(err){res.json(err)}

}

const adminLogIn=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const adimn = await Admin.login(email,password)
        if(adimn){
            const tocken=createTocken(adimn._id)
            res.cookie('jwt',tocken,{httpOnly:true,maxAge:maxAge*1000})
            res.status(200).json({adimn:adimn._id,tocken})
        }
    }catch(err){console.log(err)} 
}

const adminLogOut=async (req,res)=>{
    res.cookie('jwt','empty-key',{maxAge:1})
    res.status(400).json("Successfully logged out")
}

const newHackathon=(req,res)=>{}

module.exports={
    createAccount,
    adminLogIn,
    newHackathon,
    adminLogOut,
}




  
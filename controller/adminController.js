const Admin = require('../models/adminModel')
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const maxAge= 3 * 24 * 64 * 64;


const createTocken=(id)=>{
    return jwt.sign({id},"secret-key",{expiresIn:maxAge})
}

const createAccount=async (req,res)=>{
    const admin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,await bcrypt.genSalt())
      });

      try {
          await admin.create()
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

module.exports={
    createAccount,
    adminLogIn,
    adminLogOut
}




  
const Admin = require('../models/adminModel')
const Role=require('../models/role')
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
const regiterForHackaton=(req,res)=>{

}
const arrangePersonalMeeting=(req,res)=>{}


const getUserById=async (req,res)=>{
    try{
        await User.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
            
        });
    }catch(err){console.log(err)}
}
const getAllUser=async (req,res)=>{
    User.find()
    .then(
        (result)=>{
            res.status(200).json(result)
        }
    )
    .catch((err)=>{
        console.log(err);
    })
}

const deleteUser=async(req,res)=>{
    try{
        await User.findOneAndRemove({ _id:req.params.userId })
    }catch(err){res.status(400).json(err)}
}

const usersEvent=async (req,res)=>{
    try{
        const users = await User.find().populate('events');
        res.send(users);
    }catch(err){res.status(400).json(err)}
}

const userLogIn=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await User.login(email,password)
        if(user){
            const tocken=createTocken(user._id)
            res.cookie('jwt',tocken,{httpOnly:true,maxAge:maxAge*1000})
            res.status(200).json({user:user._id,tocken})
        }
    }catch(err){console.log(err)} 
}

const userLogOut=async (req,res)=>{
    res.cookie('jwt','empty-key',{maxAge:1})
    res.status(400).json("Successfully logged out")
}

module.exports={
    createAccount,
    adminLogIn,
    adminLogOut
}




  
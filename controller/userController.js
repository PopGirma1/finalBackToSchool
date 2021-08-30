const Customer = require('../models/userModel')
const Event = require('../models/eventModel')


const registerForHackaton=async (req,res)=>{
    const {FirstName,LastName,TelMob,Email,Gender,facebookLink,telegramLink,linkedInLink,twitterLink,instagrameLink,course,level,year,school,topic,currentStatus,whyInetested,futureVision,hasLabtop}=req.body
}
const registerFor=async (req,res)=>{}

const getAllVisitors=(req,res)=>{
    const customers=Customer.find()
    if(customers){
        res.status(200).json(customers)
    }else{
        res.status(403).json("Bad Request")
    }
}

module.exports={
    registerForHackaton,
    getAllVisitors
}

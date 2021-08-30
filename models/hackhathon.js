const mongoose=require('mongoose')
const hackahatonSchema=mongoose.Schema

const hackhahaton=new hackahatonSchema({
    RegDeadline:Date,
    Place:String,
    Date:String,
    Participants:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Visitors' 
      },
    Size:Number,
    Restrictions:String,
    SpecialOpportunity:String,
    AvailableServices:String,
    MentorshipDates:String,
    Rewards:String
})

const hackhatonModel=mongoose.model("Hackhaton",hackhahaton)
module.exports=hackhatonModel
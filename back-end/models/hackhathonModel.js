const mongoose=require('mongoose')
const hackahatonSchema=mongoose.Schema

const hackhahaton=new hackahatonSchema({
    title:String,
    RegDeadline:Date,
    Place:String,
    Date:String,
    Size:Number,
    Restrictions:String,
    SpecialOpportunity:String,
    AvailableServices:[String],
    MentorshipDates:String,
    Rewards:String,
    Participants:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'HackathonUsers' 
      },
},
  {
    timestamps:true,
  }
)

const hackhatonModel=mongoose.model("Hackhatons",hackhahaton)
module.exports=hackhatonModel
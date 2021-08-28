const mongoose=require('mongoose')
const eventSchema=mongoose.Schema;

const event=new eventSchema(
    {
        title:String,
        eventDate:Date,
        // describingImg:String,
        owner: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
          }, 
    },
    {
        timestamps:true
    }
)

const eventModel=mongoose.model("Event",event)
module.exports=eventModel
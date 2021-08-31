const mongoose=require('mongoose')
const eventSchema=mongoose.Schema;

const event=new eventSchema({
        title:{
            type:String,
            require:true,
            unique:true,
        },
        type:{
            type:String,
            require:true,
            enum:["seminar","competition","workshop"],
        },
        eventDate:Date,
        discribingImage:String,
        participants: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'EventUser' }
          ]
    },
    {
        timestamps:true
    })

const eventModel=mongoose.model("Event",event)
module.exports=eventModel
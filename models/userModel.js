const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const {isEmail} = require("validator")

const eventUser=new Schema({
    name: String,
    email:String,
    phone:String,
    company:String,
    Additional_info:String,
    voice:{type:String},
    registerd_for_event:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Events' 
    }
})

const hackathonUser=new Schema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        required:true,
        unique:true,
        validator:[isEmail,"Please enter valid email"],
    },
    phone:String,
    gender:{
        type:String,
        enum:["Female","Male"]
    },
    address:[{
        "facebook":{
            type:String,
            require:true
        },
        "telegram":{
            type:String,
            require:true
        },
        "linkedIn":{
            type:String,
            require:true
        },        
        "instagram":{
            type:String,
        },
        "twitter":{
            type:String,
        }
    }],
    educationalProfile:[{
        Course_of_Study:String,
        Level:Number,
        Year_of_Class:Number,
        Name_of_School:String,
        Topic_of_Interest:{type:String,enum:["Application Development","Data Science","Java Applications"]},
        Prior_knowledge_in_chosen_topic:{type:String,enum:["Beginners", "Intermediary","Advanced"]},
        Why_do_you_want_to_participate:String,
        What_will_you_do_with_the_knowledge_acquired:String,
        has_personal_labtop:Boolean,
        comment:String
    }],
    registerd_for_hackathon:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Hackathons' 
    }

})

module.exports =mongoose.model("EventUser",eventUser);
// module.exports =mongoose.model("HackathonUser",hackathonUser);


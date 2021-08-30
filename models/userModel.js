const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const {isEmail} = require("validator")

const eventUser=new Schema({
    name: String,
    email:String,
    phone:String,
    company:String,
    Additional_info:String
    voice:{type:String}
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
    phone:String
    gender:{enum:["Female","Male"]}
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
        Topic_of_Interest:{enum:"Application Development","Data Science","Java Applications"},
        Prior_knowledge_in_chosen_topic:{enum:"Beginners", "Intermediary","Advanced"},
        Why_do_you_want_to_participate:String,
        What_will_you_do_with_the_knowledge_acquired:String.
        has_personal_labtop:boolean,
        comment:String
    }]

})

const eventUserModel=mongoose.model("EventUser",eventUser)
const hackatonUserModel=mongoose.model("HackatonUser",hackathonUser)
module.exports={
    eventUserModel,
    hackatonUserModel
}
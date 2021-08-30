const mongoose=require('mongoose')
const customerSchema=mongoose.Schema;
const {isEmail} = require("validator")

const visitor=new customerSchema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        required:true,
        unique:true,
        validator:[isEmail,"Please enter valid email"],
    },
    bussinessSector:{
        type:String,
    },

    profession:{
        type:String,
        default:null,
    },
    
})

const visitorModel=mongoose.model("Visitor",visitor)
module.exports=visitorModel
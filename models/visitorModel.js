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
        default:null,
        enum:["Day care","High school","Universty","Polytechnic","Art"]
    },
    profession:{
        type:String,
        default:null,
        enum:["Head","Student","Universty teacher","Special teacher","Other"]
    },
    
})

const visitorModel=mongoose.model("Customer",visitor)
module.exports=visitorModel
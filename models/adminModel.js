const mongoose=require('mongoose')
const adminSchema=mongoose.Schema;
const {isEmail} = require("validator")
const bcrypt=require('bcrypt')
const admin=new adminSchema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        required:true,
        unique:true,
        validator:[isEmail,"Please enter valid email"],
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Minimum password length is 6"]
    },
})

admin.statics.login =async function(email,password){
    const admin = await this.findOne({email});
    const salt=await bcrypt.genSalt()
    if(admin ){
        const auth=await bcrypt.compare( password , admin.password )
        if(auth){
            return auth
        }
        throw Error("incorrect password")
    }
    throw Error("Incorrect email")
}
const adminModel=mongoose.model("User",admin)
module.exports=adminModel
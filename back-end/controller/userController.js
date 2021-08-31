const Event = require('../models/eventModel')
const EventUser=require('../models/userModel')
var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'back2schoolethexp@gmail.com',
      pass: 'password'
    }
  });

const registerForEvent=async (req,res)=>{
    //specify for which event is the user going to be registered
    const event=await Event.findById(req.params.event)
    const registerd_for_event=event._id
    const {voice}=req.file.filename
    const {name,email,phone,company,Additional_info}=req.body
    try { 
        const user=await EventUser.create({name,email,phone,company,Additional_info,voice,registerd_for_event})
        await transporter.sendMail({
            from: 'back2schoolethexp@gmail.com',
            to: usrEmail,
            subject: 'Frome back to school etiopia',
            text: `thank you for signing app`
          }, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        await event.participants.push(user._id)  
        await event.save()
    }catch(error) {console.log("Errrorrrr::",error)}
}

const registerForHackaton=async (req,res)=>{
//    const {FirstName,LastName,TelMob,Email,Gender,facebookLink,telegramLink,linkedInLink,twitterLink,instagrameLink,course,level,year,school,topic,currentStatus,whyInetested,futureVision,hasLabtop}=req.body
}

module.exports={
    registerForEvent,
    registerForHackaton,
}

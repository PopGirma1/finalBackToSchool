const Event = require('../models/eventModel')
const EventUser=require('../models/userModel')

const registerForEventViaInfo=async (req,res)=>{
    //specify for which event is the user going to be registered
    const event=await Event.findById(req.params.event)
    const registerd_for_event=event._id
    const {name,email,phone,company,Additional_info}=req.body
    try { 
        const user=await EventUser.create({name,email,phone,company,Additional_info,registerd_for_event})
        await event.participants.push(user._id)  
        await event.save()
    }catch(error) {console.log("Errrorrrr::",error)}
}

const registerForEventViaVoice=(req,res)=>{
    const event=await Event.findById(req.params.event)
    const registerd_for_event=event._id
    const {voice}=req.body
    try {
        const user=await EventUser.create({voice,registerd_for_event})
        await event.participants.push(user._id)
        await event.save()
    } catch (error) {
        console.log(error)
    }
}
const registerForHackaton=async (req,res)=>{
    const {FirstName,LastName,TelMob,Email,Gender,facebookLink,telegramLink,linkedInLink,twitterLink,instagrameLink,course,level,year,school,topic,currentStatus,whyInetested,futureVision,hasLabtop}=req.body
}

module.exports={
    registerForEventViaInfo,
    registerForEventViaVoice,
    registerForHackaton,
}

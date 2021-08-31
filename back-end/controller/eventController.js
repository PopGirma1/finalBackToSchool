const Event = require('../models/eventModel')
const multer = require('multer');

// define storage for images
const storage = multer.diskStorage({
    destination:function(request,file,callback){
        callback(null,'./public/Uploads/images')
    },
    //add back extension
    filename:function(request,file,callback){
        callback(null,Date.now()+file.originalname)
    }
    

})
// const upload = multer({ storage });
// uploading parameter 4 multer
const upload =multer({storage}).single("image")
const postEvent=async (req,res)=>{
    const {title,type,participants}=req.body
    const describingImage=req.file.filename
    try{
        const event=await Event.create({title,type,describingImage})
        if(event){
            res.status(200).json(event)
        }
    }catch(err){res.status(400).json(err)}
}


const searchEventByName=(req,res)=>{
    const name=req.params.name
    try{
        const event=Event.findOne({name})
        if(event){
            res.status(200).json(event)
        }
    }catch(err){res.status(400).json("Bad Request")}
}
const searchEventByDate=(req,res)=>{
    const date=req.params.date
    try{
        const event= Event.findOne({date})
        if(event){
            res.status(200).json(event)
        }
    }catch(err){res.status(400).json(err)}
}
const getAllEvents=(req,res)=>{
    Event.find()
    .then(
        (result)=>{
            res.status(200).json(result)
        }
    )
    .catch((err)=>{
        res.status(400).json(err)
    })
}
const getEventById=async (req,res)=>{
    const event=await Event.findById(req.params.id)
    if(event){
        res.status(200).json(event)
    }
}
const updateEvent=(re,res)=>{}
const deleteEvent=(req,res)=>{}

module.exports={
    postEvent,
    getEventById,
    searchEventByName,
    searchEventByDate,
    getAllEvents,
    upload,
    updateEvent,
    deleteEvent,
}
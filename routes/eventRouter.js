const express=require('express')
const router=express.Router()
const eventController=require('../controller/eventController')
const imageUploader=require('../middleware/imageUploader')
const authMiddleware=require('../middleware/authMiddleware')

router.get('/',eventController.getAllEvents)
router.get('/:id',eventController.getEventById)
router.get('/:name',eventController.searchEventByName)
router.get('/:date',eventController.searchEventByDate)
router.post('/create',authMiddleware.authAdmin,eventController.postEvent)
router.delete('/:eventId',eventController.deleteEvent)
// router.post('/uplouds',imageUploader.upload)
module.exports=router
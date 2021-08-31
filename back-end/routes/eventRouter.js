const express=require('express')
const router=express.Router()
const eventController=require('../controller/eventController')
const authMiddleware=require('../middleware/authMiddleware')

router.get('/',eventController.getAllEvents)
router.get('/:id',eventController.getEventById)
router.get('/:name',eventController.searchEventByName)
router.get('/:date',eventController.searchEventByDate)
router.post('/create',authMiddleware.authAdmin,eventController.upload,eventController.postEvent)
router.patch('/:eventId',authMiddleware.authAdmin,eventController.updateEvent)
router.delete('/:eventId',authMiddleware.authAdmin,eventController.deleteEvent)

module.exports=router
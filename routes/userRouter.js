const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.post('/registerForEventViaInfo/:event',userController.registerForEventViaInfo)
router.post('/registerForEventViaVoice/:event',userController.registerForEventViaVoice)
router.post('/registerForHackathon/:hackathon',userController.registerForHackaton)

module.exports=router
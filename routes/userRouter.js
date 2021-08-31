const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.post('/registerForEvent/:event',userController.registerForEvent)
router.post('/registerForHackathon/:hackathon',userController.registerForHackaton)

module.exports=router
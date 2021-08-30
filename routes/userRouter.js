const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.post('/registerForHackaton',userController.registerForHackaton)
router.get('/',userController.getAllVisitors)

module.exports=router
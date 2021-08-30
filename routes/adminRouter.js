const express=require('express')
const router=express.Router()
const adminController=require('../controller/adminController')

router.post('/createAccounte',adminController.createAccount)
router.post('/login',adminController.adminLogIn)
router.post('/newEvent',adminController.newEvent)
router.post('/newHackathon',adminController.newHackathon)
router.get('/logout',adminController.adminLogOut)

module.exports=router
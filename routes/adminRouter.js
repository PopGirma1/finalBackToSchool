const express=require('express')
const router=express.Router()
const userController=require('../controller/adminController')
const customerController=require('../controller/visitorController')




router.post('/createAccount',userController.createAccount)
router.post('/login',userController.adminLogIn)
router.get('/logout',userController.adminLogOut)
router.post('/registerVisitor',customerController.registerVisitor)

module.exports=router
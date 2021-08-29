const express=require('express')
const router=express.Router()
const visitorController=require('../controller/visitorController')

router.post('/registerVisitor',visitorController.registerVisitor)
router.get('/',visitorController.getAllVisitors)

module.exports=router
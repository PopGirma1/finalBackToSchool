const express=require('express')
const router=express.Router()
const customerController=require('../controller/customerController')


router.get('/',customerController.getAllCustomers)
router.get('/:userId',customerController.getUserById)
router.post('/createAccounte',userController.createAccount)
router.post('/registerCustomer',customerController.registerCustomer)
router.delete('/:userId',customerController.deleteUser)
router.post('/login',customerController.userLogIn)


module.exports=router
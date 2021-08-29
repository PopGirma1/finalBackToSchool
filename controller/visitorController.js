const Customer = require('../models/visitorModel')

const registerVisitor=async (req,res)=>{
    const {email,bussinessSector,profession}=req.body
    const customer=new Customer({email,bussinessSector,profession})
    //     await customer.save((err,customer)=>{
    //         if(err){
    //             res.status(500).send({ message: err });
    //             return;
    //         }
    //         Role.findOne({ name: "customer" }, (err, role) => { 
    //             if (err) {
    //                 res.status(500).send({ message: err });
    //                 return;
    //             }
    //             customer.role = [role._id];
    //             customer.save(err=>{
    //                 if(err){
    //                     res.status(500).send({ message: err });
    //                     return;
    //                 }
    //                 res.status(201).json(customer._id)
    //             })      
    //     }) 
    // }) 
}

const getAllVisitors=(req,res)=>{
    const customers=Customer.find()
    if(customers){
        res.status(200).json(customers)
    }else{
        res.status(403).json("Bad Request")
    }
}

module.exports={
    registerVisitor,
    getAllVisitors
}

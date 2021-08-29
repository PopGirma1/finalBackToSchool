//import all required modules here
const express=require('express')
const mongoose=require('mongoose')
const adminRouter=require('./routes/adminRouter')
const eventRouter=require('./routes/eventRouter')


//conect to the database
const uri = "mongodb://localhost/back2school"
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true  })
.then((result)=>{
    app.listen(3000);
}).catch((err)=>{
        console.log(err)
})
mongoose.connection.once('open',function(err){
    console.log(err)}
).on('error',function(err){
    console.log(err)
})

//start the express app
var app=express()
//middlewares
app.use(express.json())
app.listen(3000,"localhost")
app.use(express.static(__dirname+"./public/"))

app.get('/',(req,res)=>{res.send("home")})
app.use('/admin',adminRouter)
app.use('/events',eventRouter)
app.use('/visitors',vistorController)


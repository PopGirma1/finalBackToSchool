//import all required modules here
const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')

const adminRouter=require('./routes/adminRouter')
const eventRouter=require('./routes/eventRouter')
const visitorRouter=require('./routes/visitorRouter')

//start the express app
var app=express()

//conect to the database
const uri = "mongodb://localhost/back2school"
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(()=>{
        app.listen(3000,"localhost") 
    }).catch((err)=>{console.log(err)})
mongoose.connection
    .once('open',function(err){console.log(err)})
    .on('error',function(err){console.log(err)
})

//middlewares
app.use(express.json())
app.use(express.static(__dirname+"./public/"))
app.use(cookieParser())

//register routes
app.get('/',(req,res)=>{res.send("home")})
app.use('/admin',adminRouter)
app.use('/events',eventRouter)
app.use('/visitors',visitorRouter)


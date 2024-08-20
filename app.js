const express = require('express')
const app = express()
const {user} =require('./models/index')

// app.use("view engine","ejs")
const userRoute = require('./routes/userRoute')
app.use("",userRoute)

app.listen(3000,()=>{
    console.log("server started at 300")
})
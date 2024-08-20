const express = require('express')
const app = express()
const {user} =require('./models/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// this need to be done to get the req body in the json format
app.set("view engine","ejs")
const userRoute = require('./routes/userRoute')
app.use("",userRoute)

app.listen(3000,()=>{
    console.log("server started at 300")
})
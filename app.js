const express = require('express')
const app = express()
const {user} =require('./models/index')
const cors = require('cors')
app.use(cors())
// it will allow every origin we can restrict it too
// app.user(cors(
// {origin: 'https://http://localhost:3000} 
/* if you are doing locally you have to change the port number only */
    
// ))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// this need to be done to get the req body in the json format
app.set("view engine","ejs")
const userRoute = require('./routes/userRoute')
app.use("",userRoute)

app.listen(3000,()=>{
    console.log("server started at 300")
})
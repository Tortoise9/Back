const {user} = require('../models/userModel')
// this is table 
exports.Pregister =async(req,res)=>{
    res.send("iam post method")
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    await   user.create({
        email:email,
        password:password,
        username:username
    })
    console.log("created sucessfully")

}
exports.renderRegister = (req,res)=>{
    res.send("register")
}

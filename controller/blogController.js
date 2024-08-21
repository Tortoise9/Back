const {users} = require('../models')
// this is table 
exports.Pregister =async(req,res)=>{
    // res.send("iam post method")
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    if(!email && !username && !password){
        req.send("please provide valid password")
    }
    await users.create({
        email:email,
        password:password,
        username:username
    })
    console.log("created sucessfully")

}
exports.renderRegister = (req,res)=>{
    res.send("register")
}
exports.LoginP =async (req,res)=>{
    const email  = req.body.email
    const password = req.body.password
     const one =  await users.findAll({
        where :{
            email:email
        }
    })
    if(!email &!password){
        return res.json({
            error : "sorry input email and password"
        })
    }
    if(one.length>0){
        if( password===one[0].password){

            res.json(
                {status :"okay"}
            )
        }
        else{
            res.json("please input correct password")
        }
    }
    else{
        return res.send("user doesn't exist " )
    }
}
exports.login = (req,res)=>{
    res.send("Login page")
}
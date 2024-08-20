const { Pregister, renderRegister } = require('../controller/blogController')
const router =require("express").Router()

router.route('/register').post(Pregister).get(renderRegister)


module.exports =router
const { Pregister, renderRegister, LoginP, login } = require('../controller/blogController')
const router =require("express").Router()

router.route('/register').post(Pregister).get(renderRegister)
router.route('/login').post(LoginP).get(login)

module.exports =router
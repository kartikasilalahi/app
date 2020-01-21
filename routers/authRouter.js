const express=require('express')
const {Authcontroller} = require('../controllers')

const router = express.Router()

router.get('/hashpassword', Authcontroller.belajarcrypto)


module.exports=router
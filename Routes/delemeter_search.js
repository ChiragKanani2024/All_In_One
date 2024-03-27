const express = require('express')
const delemeter_search = express.Router()


const session = require("express-session")
const getStudentData = require('../app/http/controllers/delemeter_search/getStudentData')
const comboGenerate = require('../app/http/controllers/delemeter_search/comboGenerater')
const auth = require('../app/http/middlewares/authValidation/auth')

delemeter_search.use(session({ 
    secret: 'Your_Secret_Key', 
    resave: true, 
    saveUninitialized: true
})) 


delemeter_search.all("/",auth,getStudentData);
delemeter_search.get("/combo",auth,comboGenerate);


module.exports = delemeter_search
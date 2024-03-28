const express = require('express');
const RegisterController = require('../app/http/controllers/auth/RegisterController');
const LoginController = require('../app/http/controllers/auth/LoginController');
const RegisterLogin = require('../app/http/middlewares/authValidation/RegisterLogin');
const HomeController = require('../app/http/controllers/HomeController');
const ForgotPasswordController = require('../app/http/controllers/auth/ForgotPasswordController');
const auth = require('../app/http/middlewares/authValidation/auth');
const guest = require("../app/http/middlewares/authValidation/guest")

const web = express.Router()




try {
web.get('/',auth,HomeController().getHome)
web.get("/register",guest,RegisterController().getform);
web.post("/register",RegisterLogin,RegisterController().registerUser);
web.get("/login",guest,LoginController().getform);
web.post("/login",RegisterLogin,LoginController().loginUser);
web.get("/activateuser",RegisterController().activeUser)


//log out
web.get("/logout",(req,res)=>{
    res.clearCookie('token');
    res.redirect("/login");
})

//forgot password
web.get('/forgotpassword',ForgotPasswordController().getForm)
web.post('/forgotpassword',ForgotPasswordController().forgotform)
web.get('/changepassword',ForgotPasswordController().getUpdatePassForm)
web.post('/changepassword',ForgotPasswordController().UpdatePass)

web.get('/html_template_1',(req,res)=>{
    res.render("component/html_templets/template_1",{layout:"layouts/plainLayout.ejs"})
})
web.get('/html_template_2',(req,res)=>{
    res.render("component/html_templets/template_2",{layout:"layouts/plainLayout.ejs"})
})
web.get('/html_template_3',(req,res)=>{
    res.render("component/html_templets/template_3",{layout:"layouts/plainLayout.ejs"})
})

web.get("/sessionexpired",(req,res)=>{
    res.send("change Password Session Expired")
})
web.get("*",(req,res)=>{
    res.send("You are lost go to back and enter right router")
})

} catch (error) {
    console.log(error)
}


module.exports = web
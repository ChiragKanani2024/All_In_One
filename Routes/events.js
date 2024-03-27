const express = require("express");
const auth = require("../app/http/middlewares/authValidation/auth");
const events = express.Router();

try {

events.get("/",auth,(req,res)=>{
        res.render("component/events",{ layout: 'plainLayout.ejs' })
})

} catch (error) {
    console.log(error)
}

module.exports = events
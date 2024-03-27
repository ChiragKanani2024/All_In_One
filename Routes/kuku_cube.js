const express = require("express");
const auth = require("../app/http/middlewares/authValidation/auth");
const kuku_cube = express.Router();

try {

kuku_cube.get("/",auth,(req,res)=>{
        res.render("component/kuku_cube",{ layout: 'plainLayout.ejs' })
})

} catch (error) {
    console.log(error)
}

module.exports = kuku_cube
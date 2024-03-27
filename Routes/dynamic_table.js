const express = require("express");
const auth = require("../app/http/middlewares/authValidation/auth");
const dynamic_table = express.Router();



try {

dynamic_table.get("/",auth,(req,res)=>{
        res.render("component/dynamic_table",{ layout: 'plainLayout.ejs' })
})

} catch (error) {
    console.log(error)
}

module.exports = dynamic_table
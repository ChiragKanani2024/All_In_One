const express = require("express");
const auth = require("../app/http/middlewares/authValidation/auth");
const tictactoe = express.Router();

try {

tictactoe.get("/",auth,(req,res)=>{
        res.render("component/tictactoe",{ layout: 'plainLayout.ejs' })
})

} catch (error) {
    console.log(error)
}

module.exports = tictactoe
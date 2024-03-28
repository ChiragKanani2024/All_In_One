const express = require('express');
const api_posts  = express.Router()

const auth = require('../app/http/middlewares/authValidation/auth')


api_posts.get("/",auth,(req,res)=>{
    res.render("component/api_posts/posts",{layout:"layouts/plainLayout.ejs"});
})

api_posts.get('/post-detail',auth,(req,res)=>{
    res.render("component/api_posts/post_detail",{layout:"layouts/plainLayout.ejs"})
})

api_posts.get("*",(req,res)=>{
    res.send("404 not found , You are Lost")
})

module.exports = api_posts
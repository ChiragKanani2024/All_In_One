const express = require('express');
const api_posts  = express.Router()




api_posts.get("/",(req,res)=>{
    res.render("component/api_posts/posts",{layout:"layouts/plainLayout.ejs"});
})

api_posts.get('/post-detail',(req,res)=>{
    res.render("component/api_posts/post_detail",{layout:"layouts/plainLayout.ejs"})
})

api_posts.get("*",(req,res)=>{
    res.send("404 not found , You are Lost")
})

module.exports = api_posts
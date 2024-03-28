const express = require("express");
const app = express()
require("dotenv").config();

const web = require("./Routes/web")
const dynamic_table = require("./Routes/dynamic_table");
const kuku_cube = require("./Routes/kuku_cube");
const tictactoe = require("./Routes/tictactoe");
const events = require("./Routes/events");
const delemeter_search = require("./Routes/delemeter_search");
const student_listing = require("./Routes/student_listing");
const job_application = require("./Routes/job_application");
const dynamic_grid = require("./Routes/dynamic_grid");
const api_posts = require("./Routes/api_posts");



const expresslayout = require("express-ejs-layouts")
app.set('layout', './layouts/layout')
const  cookieParser = require('cookie-parser');
const flash = require('express-flash')

const session = require("express-session");

app.use(session({ 
    secret: 'Your_Secret_Key', 
    resave: true, 
    saveUninitialized: true
})) 

app.use(flash());


app.use(cookieParser())



app.use(expresslayout)

app.use(express.static("public"))
app.use(express.static("public/template_1"))
app.use(express.static("public/template_2"))
app.use(express.static("public/template_3"))
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/kuku_cube",kuku_cube)
app.use("/api_posts",api_posts)
app.use("/dynamic_grid",dynamic_grid)
app.use("/student_listing",student_listing)
app.use("/delemeter_search",delemeter_search)
app.use("/job_application",job_application)
app.use("/events",events)
app.use("/tictactoe",tictactoe)
app.use("/dynamic_table",dynamic_table)
app.use("/",web);

app.listen(process.env.port || 3002)
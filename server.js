const express = require("express");
const app = express()
require("dotenv").config();

const web = require("./Routes/web")
const dynamic_table = require("./Routes/dynamic_table");
const kuku_cube = require("./Routes/kuku_cube");
const tictactoe = require("./Routes/tictactoe");
const events = require("./Routes/events");
const delemeter_search = require("./Routes/delemeter_search");



const expresslayout = require("express-ejs-layouts")
const  cookieParser = require('cookie-parser');




app.use(cookieParser())



app.use(expresslayout)

app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/kuku_cube",kuku_cube)
app.use("/delemeter_search",delemeter_search)
app.use("/events",events)
app.use("/tictactoe",tictactoe)
app.use("/dynamic_table",dynamic_table)
app.use("/",web);

app.listen(process.env.port || 3002)
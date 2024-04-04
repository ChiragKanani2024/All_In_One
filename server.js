const express = require("express");
const app = express();
require("dotenv").config();
const web = require("./routes");

const expresslayout = require("express-ejs-layouts");
app.set("layout", "./layouts/layout");
const cookieParser = require("cookie-parser");
const flash = require("express-flash");
const logger = require("./logger");

const session = require("express-session");

app.use(
  session({
    secret: "Your_Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(cookieParser());

app.use(expresslayout);

app.use(express.static("public"));
app.use(express.static("public/template_1"));
app.use(express.static("public/template_2"));
app.use(express.static("public/template_3"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", web);

app.listen(process.env.port || 3002);

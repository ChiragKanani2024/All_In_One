const express = require("express");
const student_listing = express.Router();





const {searchByFilter,searchById} = require("../app/http/controllers/studentListing/searchStudent")
const studentListingController = require("../app/http/controllers/studentListing/studentListing");


const session = require("express-session");
const auth = require("../app/http/middlewares/authValidation/auth");

student_listing.use(session({ 
    secret: 'Your_Secret_Key', 
    resave: true, 
    saveUninitialized: true
})) 

student_listing.get("/",auth,studentListingController().studentListing)
student_listing.all("/searchById",auth,searchById)
student_listing.all("/searchByFilter",auth,searchByFilter)
student_listing.get("/attandenceReport",auth,studentListingController().attandenceReport)
student_listing.get("/getResult",auth,studentListingController().getResult)
student_listing.get("/studentResult/:id",auth,studentListingController().studentResult)

module.exports = student_listing
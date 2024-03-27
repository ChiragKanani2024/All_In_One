const express = require('express');
const job_application = express.Router()

const insertController = require('../app/http/controllers/jobApplication/insertController');
const validate = require('../app/http/middlewares/validation');
const updateController = require('../app/http/controllers/jobApplication/updateController');
const getDataController = require('../app/http/controllers/jobApplication/getDataController');
const cityStateController = require('../app/http/controllers/jobApplication/cityStateCotroller');
const auth = require('../app/http/middlewares/authValidation/auth');




try {

job_application.get("/",auth,getDataController().getData)
job_application.get("/insertform",auth,insertController().getform);
job_application.post("/insertdata",auth,validate,insertController().insertData);
job_application.get("/updateform",auth,updateController().getform)
job_application.post("/updatedata",auth,validate,updateController().updateData)

// new form
job_application.get("/insertform2",auth,insertController().getform2);
job_application.post("/insertdata2",auth,insertController().insertData);

job_application.get("/updateform2",auth,insertController().getform2);
job_application.post("/updateform2",auth,updateController().getform);
job_application.post("/ajaxupdatedata",auth,updateController().updateData)


//state city practice
job_application.post("/getstate",auth,cityStateController().getState)
job_application.post("/getcity",auth,cityStateController().getCitys)
job_application.get("/citystate",auth,cityStateController().showPage)




job_application.get("*",(req,res)=>{
    res.send("You are lost go to back and enter right router")
})

} catch (error) {
    console.log(error)
}


module.exports = job_application
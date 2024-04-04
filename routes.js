const express = require("express");
const web = express.Router();
const session = require("express-session");
web.use(
  session({
    secret: "Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);

//auth
const RegisterController = require("./app/http/controllers/auth/RegisterController");
const LoginController = require("./app/http/controllers/auth/LoginController");
const RegisterLogin = require("./app/http/middlewares/authValidation/RegisterLogin");
const HomeController = require("./app/http/controllers/HomeController");
const ForgotPasswordController = require("./app/http/controllers/auth/ForgotPasswordController");
const auth = require("./app/http/middlewares/authValidation/auth");
const guest = require("./app/http/middlewares/authValidation/guest");

//delemeter search
const getStudentData = require("./app/http/controllers/delemeter_search/getStudentData");
const comboGenerate = require("./app/http/controllers/delemeter_search/comboGenerater");

//student listing
const {
  searchByFilter,
  searchById,
} = require("./app/http/controllers/studentListing/searchStudent");
const studentListingController = require("./app/http/controllers/studentListing/studentListing");

//job application
const insertController = require("./app/http/controllers/jobApplication/insertController");
const validate = require("./app/http/middlewares/validation");
const updateController = require("./app/http/controllers/jobApplication/updateController");
const getDataController = require("./app/http/controllers/jobApplication/getDataController");
const cityStateController = require("./app/http/controllers/jobApplication/cityStateCotroller");
const deleteDataController = require("./app/http/controllers/jobApplication/deleteDataController");
// dynamic grid
const middleware = require("./app/http/middlewares/dynamicGridMiddleware");
const dynamic_grid_controller = require("./app/http/controllers/dynamic_grid/dynamic_grid");

try {
  web.get("/", auth, HomeController().getHome);
  web.get("/register", guest, RegisterController().getform);
  web.post("/register", RegisterLogin, RegisterController().registerUser);
  web.get("/login", guest, LoginController().getform);
  web.post("/login", RegisterLogin, LoginController().loginUser);
  web.get("/activateuser", RegisterController().activeUser);
  web.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
  });

  //forgot password
  web.get("/forgotpassword", ForgotPasswordController().getForm);
  web.post("/forgotpassword", ForgotPasswordController().forgotform);
  web.get("/changepassword", ForgotPasswordController().getUpdatePassForm);
  web.post("/changepassword", ForgotPasswordController().UpdatePass);

  //delemeter search routes
  web.all("/delemeter_search", auth, getStudentData);
  web.get("/delemeter_search/combo", auth, comboGenerate);

  //student listing routes
  web.get("/student_listing/", auth, studentListingController().studentListing);
  web.all("/student_listing/searchById", auth, searchById);
  web.all("/student_listing/searchByFilter", auth, searchByFilter);
  web.get(
    "/student_listing/attandenceReport",
    auth,
    studentListingController().attandenceReport
  );
  web.get(
    "/student_listing/getResult",
    auth,
    studentListingController().getResult
  );
  web.get(
    "/student_listing/studentResult/:id",
    auth,
    studentListingController().studentResult
  );

  // job application routes
  web.get("/job_application/", auth, getDataController().getData);
  web.get("/job_application/insertform", auth, insertController().getform);
  web.post(
    "/job_application/insertdata",
    auth,
    validate,
    insertController().insertData
  );
  web.get("/job_application/updateform", auth, updateController().getform);
  web.post(
    "/job_application/updatedata",
    auth,
    validate,
    updateController().updateData
  );

  // new form
  web.get("/job_application/insertform2", auth, insertController().getform2);
  web.post("/job_application/insertdata2", auth, insertController().insertData);
  web.get("/job_application/updateform2", auth, insertController().getform2);
  web.post("/job_application/updateform2", auth, updateController().getform);
  web.post(
    "/job_application/ajaxupdatedata",
    auth,
    updateController().updateData
  );
  web.get("/job_application/delete", auth, deleteDataController().deleteData);
  //state city practice
  web.post("/job_application/getstate", auth, cityStateController().getState);
  web.post("/job_application/getcity", auth, cityStateController().getCitys);
  web.get("/job_application/citystate", auth, cityStateController().showPage);

  //dynamic grid routes
  web.all("/dynamic_grid", auth, middleware, dynamic_grid_controller().home);

  //api json placeholder routes
  web.get("/api_posts/", auth, (req, res) => {
    res.render("component/api_posts/posts", {
      layout: "layouts/plainLayout.ejs",
    });
  });

  web.get("/api_posts/post-detail", auth, (req, res) => {
    res.render("component/api_posts/post_detail", {
      layout: "layouts/plainLayout.ejs",
    });
  });

  web.get("/html_template_1", auth, (req, res) => {
    res.render("component/html_templets/template_1", {
      layout: "layouts/plainLayout.ejs",
    });
  });
  web.get("/html_template_2", auth, (req, res) => {
    res.render("component/html_templets/template_2", {
      layout: "layouts/plainLayout.ejs",
    });
  });
  web.get("/html_template_3", auth, (req, res) => {
    res.render("component/html_templets/template_3", {
      layout: "layouts/plainLayout.ejs",
    });
  });

  web.get("/sessionexpired", (req, res) => {
    res.send("change Password Session Expired");
  });

  web.get("/dynamic_table", auth, (req, res) => {
    res.render("component/dynamic_table", {
      layout: "layouts/plainLayout.ejs",
    });
  });

  web.get("/kuku_cube", auth, (req, res) => {
    res.render("component/kuku_cube", { layout: "layouts/plainLayout.ejs" });
  });
  web.get("/tictactoe", auth, (req, res) => {
    res.render("component/tictactoe", { layout: "layouts/plainLayout.ejs" });
  });
  web.get("/events", auth, (req, res) => {
    res.render("component/events", { layout: "layouts/plainLayout.ejs" });
  });
  web.get("*", (req, res) => {
    res.send("You are lost go to back and enter right router");
  });
} catch (error) {
  console.log(error);
}

module.exports = web;

const express = require("express");
const dynamic_grid = express.Router();

const auth = require('../app/http/middlewares/authValidation/auth')
const dynamic_grid_controller = require("../app/http/controllers/dynamic_grid/dynamic_grid")
const session = require("express-session");

dynamic_grid.use(
  session({
    secret: "Your_Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);

function middleware(req, res, next) {
  if (req.body.query) {
    req.session.query = req.body.query;
  }
  next();
}

dynamic_grid.all("/", auth,middleware, dynamic_grid_controller().home);

module.exports = dynamic_grid;

const express = require("express");
const dynamic_grid = express.Router();
const pagination = require("../app/http/controllers/dynamic_grid/pagination");
const tablelistingController = require("../app/http/controllers/dynamic_grid/tablelisting");
const selectquery = require("../app/http/databaseHelpers/selectquery");

const auth = require('../app/http/middlewares/authValidation/auth')

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

dynamic_grid.all("/", auth,middleware, async (req, res) => {
  try {
    if (req.method == "POST" || req.method == "GET") {
      if (req.session.query) {
        let tabelList = await selectquery.tableList();
        let querywithoutlimit = req.session.query.split("limit")[0];
        let query = querywithoutlimit.split(";")[0];
        let count = await selectquery.selectDataCount(query);
        let paginationReturn = await pagination(req, count.dataCount);
        let result = await tablelistingController(
          query,
          paginationReturn.limit,
          paginationReturn.offSet
        );
        let tablelistArr = [];
        tabelList.forEach(element => {
          for (const key in element) {
            tablelistArr.push(element[key])
          }
        });
       
        res.render("component/dynamic_grid/tablelisting", {
          currentpage: paginationReturn.currentPage,
          lastpage: paginationReturn.lastPage,
          firstpage: paginationReturn.firstPage,
          route: "dynamic_grid",
          Result: result,
          showTable: true,
          tablelist: tablelistArr,
          layout:"layouts/dynamic_grid.ejs"
        });
        

      } else {
        let tabelList = await selectquery.tableList();
        let tablelistArr = [];
        tabelList.forEach(element => {
          for (const key in element) {
            tablelistArr.push(element[key])
          }
        });
        
        res.render("component/dynamic_grid/tablelisting", {
          showTable: false,
          tablelist: tablelistArr,
          layout:"layouts/dynamic_grid.ejs"
        });
      }
    }
  } catch (error) {
    console.log(error);
    req.session.destroy();
    res.render("component/error", { error: error.sqlMessage });
  }
});

module.exports = dynamic_grid;

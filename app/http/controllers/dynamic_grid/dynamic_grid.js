const pagination = require("./pagination");
const tablelistingController = require("./tablelisting");
const selectquery = require("../../databaseHelpers/selectquery");

const dynamic_grid = () => {
  return {
    async home(req, res) {
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
            tabelList.forEach((element) => {
              for (const key in element) {
                tablelistArr.push(element[key]);
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
              layout: "layouts/dynamic_grid.ejs",
            });
          } else {
            let tabelList = await selectquery.tableList();
            let tablelistArr = [];
            tabelList.forEach((element) => {
              for (const key in element) {
                tablelistArr.push(element[key]);
              }
            });

            res.render("component/dynamic_grid/tablelisting", {
              showTable: false,
              tablelist: tablelistArr,
              layout: "layouts/dynamic_grid.ejs",
            });
          }
        }
      } catch (error) {
        console.log(error);
        req.session.destroy();
        res.render("component/error", { error: error.sqlMessage });
      }
    },
  };
};

module.exports = dynamic_grid;

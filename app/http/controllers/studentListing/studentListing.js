const getData = require("./getData").getData;
const getDataCount = require("./getData").getDataCount;
const getattandenceCount = require("./attandenceReport").getattandenceCount;
const getattandence = require("./attandenceReport").getattandence;
const getResult = require("./getResult").getResult;
const getResultCount = require("./getResult").getResultCount;
const getStudentResult = require("./studentResult");

const studentListing = () => {
  return {
    async studentListing(req, res) {
      try {
        let limit = process.env.limit;
        let DataCount = await getDataCount();
        let lastPage = DataCount / limit;
        let fields = [
          "first_name",
          "first_name desc",
          "last_name",
          "last_name desc",
          "city",
          "city desc",
          "age",
          "age desc",
          "pincode",
          "pincode desc",
          "created_date",
          "created_date desc",
          "id desc",
          "id",
          "email",
          "email desc",
          "mobile_no",
          "mobile_no desc",
          "aadhar_no",
          "aadhar_no desc",
        ];
        if (req.query.orderby) {
          if (fields.includes(req.query.orderby)) {
            req.session.orderby = req.query.orderby;
          } else {
            req.session.orderby = "id asc";
          }
        }

        let page = 1;
        let offset = 0;
        if (req.query.page) {
          if (/^\d+$/.test(req.query.page)) {
            if (Number(req.query.page) <= lastPage) {
              page = Number(req.query.page);
              offset = limit * (page - 1);
            }
          }
        }

        let result = await getData(offset, limit, req.session.orderby);

        res.render("component/studentListing/index", {
          title: "Home",
          users: result[0],
          firstpage: 1,
          lastpage: lastPage,
          currentpage: page,
          TotalDataCount: DataCount,
          limit: limit,
          orderby: req.session.orderby,
          route: "student_listing",
          layout: "layouts/student_listing.ejs",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async attandenceReport(req, res) {
      try {
        let limit = process.env.limit;
        let DataCount = await getattandenceCount(
          req.session.filterbymonth,
          req
        );

        let lastPage = DataCount / limit;

        //    console.log(req.query.filterbymonth)
        if (req.query.filterbymonth) {
          req.session.filterbymonth = req.query.filterbymonth;
        }

        let page = 1;
        let offset = 0;
        if (req.query.page) {
          if (/^\d+$/.test(req.query.page)) {
            if (Number(req.query.page) <= lastPage) {
              page = Number(req.query.page);
              offset = limit * (page - 1);
            }
          }
        }

        let result = await getattandence(
          offset,
          limit,
          req.session.filterbymonth,
          req
        );
        let split = req.session.filterbymonth.split("-");

        res.render("component/studentListing/attandenceReport", {
          title: "Home",
          attandences: result,
          firstpage: 1,
          lastpage: lastPage,
          currentpage: page,
          TotalDataCount: DataCount,
          limit: limit,
          filterbymonth: {
            year: split[0],
            month: split[1].padStart(2, 0),
            full: req.session.filterbymonth,
          },
          layout: "layouts/student_listing.ejs",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getResult(req, res) {
      try {
        let limit = process.env.limit;
        let DataCount = await getResultCount();
        let lastPage = DataCount / limit;

        let page = 1;
        let offset = 0;
        if (req.query.page) {
          if (/^\d+$/.test(req.query.page)) {
            if (Number(req.query.page) <= lastPage) {
              page = Number(req.query.page);
              offset = limit * (page - 1);
            }
          }
        }

        let result = await getResult(offset, limit);
        res.render("component/studentListing/resultReport", {
          title: "Home",
          firstpage: 1,
          lastpage: lastPage,
          currentpage: page,
          TotalDataCount: DataCount,
          limit: limit,
          Result: result,
          layout: "layouts/student_listing.ejs",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async studentResult(req, res) {
      try {
        let result = await getStudentResult(req.params.id);
        res.render("component/studentListing/studentResult", {
          title: "Home",
          Result: result.result1,
          attandences: result.attandence[0],
          layout: "layouts/student_listing.ejs",
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = studentListing;

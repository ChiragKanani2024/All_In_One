const conn = require("../../../../mysql_connection");

const getStudentData = async (req, res) => {
  try {
    let string = req.body.string;
    let delimeters = ["_", "^", "}", ":"];
    let where = {};

    let colname = {
      _: "first_name",
      "^": "last_name",
      "}": "age",
      ":": "city",
    };

    let filter = {
      _: "first_name like '%'",
      "^": "last_name like '%'",
      "}": "age like '%'",
      ":": "city like '%'",
    };

    if (req.method == "POST") {
      for (const i of string) {
        if (delimeters.includes(i)) {
          let index_i = string.indexOf(i);
          let index_j;
          let newstring = string.slice(index_i + 1);
          for (const j of newstring) {
            if (delimeters.includes(j)) {
              index_j = newstring.indexOf(j);
              break;
            }
          }
          if (where[i]) {
            if (newstring.slice(0, index_j) != "") {
              where[i].push(newstring.slice(0, index_j));
            }
          } else {
            if (newstring.slice(0, index_j) != "") {
              where[i] = [`${newstring.slice(0, index_j)}`];
            }
          }
          string = newstring;
        }
      }

      for (const key in filter) {
        if (where[key]) {
          if (where[key].length > 1) {
            filter[key] = "(";
            for (let i = 0; i < where[key].length; i++) {
              filter[key] += `${colname[key]} like '%${where[key][i]}%'`;
              if (i != where[key].length - 1) {
                filter[key] += " or ";
              } else {
                break;
              }
            }
            filter[key] += ")";
          } else {
            filter[key] = `${colname[key]} like '%${where[key][0]}%'`;
          }
        }
      }

      req.session.query = `select * from Student_Master where ${filter["_"]} and ${filter["^"]} and ${filter["}"]} and ${filter[":"]} `;
    }

    let limit = process.env.limit;
    let DataCount = await conn.query(
      `select count(*) as count from (${
        req.session.query ? req.session.query : "select * from Student_Master"
      }) as r`
    );
    let lastPage = Math.ceil(DataCount[0][0].count / limit);

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

    let result = await conn.query(
      `${
        req.session.query ? req.session.query : "select * from Student_Master"
      } limit ${limit} offset ${offset} `
    );

    res.render("component/delemeter_search/delemeter_search", {
      users: result[0],
      firstpage: 1,
      lastpage: lastPage,
      currentpage: page,
      TotalDataCount: DataCount[0][0].count,
      limit: limit,
      filter: req.body.string,
      layout: "layouts/delemeter_layout.ejs",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getStudentData;

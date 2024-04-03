const conn = require("../../../mysql_connection");

const insertHelper = () => {
  return {
    async basic_insert(req, res) {
      try {
        let basic_details = {
          firstname: req.body.first_name,
          lastname: req.body.last_name,
          designation: req.body.basic_designation,
          address1: req.body.address1,
          address2: req.body.address2,
          email: req.body.email,
          phoneno: req.body.phone,
          city: req.body.city,
          state: req.body.state,
          gender: req.body.gender,
          zipcode: req.body.zipcode,
          status: req.body.relationship_status,
          dob: req.body.dob,
          prefered_location: req.body.prefered_location,
          current_ctc: req.body.preferance_curr_ctc,
          notic_period: req.body.preferance_notice,
          expected_ctc: req.body.preferance_expec_ctc,
          department: req.body.department,
        };
        let result = await conn.query(
          "insert into basic_detail SET ?",
          basic_details
        );
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    async board_insert(req, res, employee_id) {
      try {
        let board = ["SSC", "HSC"];
        board.forEach(async (item, index) => {
          let details = {
            nameofboard: req.body.board_name[index],
            passing_year: req.body.passing_year[index],
            percentage: req.body.percentage[index],
            employee_id: employee_id,
            board: item,
          };
          conn
            .query("insert into board_detail SET ?", details)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async degree_insert(req, res, employee_id) {
      try {
        let data = req.body;
        let bechlor_details = {
          university: req.body.bachelor_university,
          cource: req.body.bachelor_course_name,
          passingyear: req.body.bachelor_passing_year,
          employee_id: employee_id,
          cgpa: req.body.bachelor_cgpa,
          degree: "Bechelor",
        };
        conn
          .query("insert into degree_detail SET ?", bechlor_details)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        if (
          data.master_cgpa &&
          data.master_course_name &&
          data.master_passing_year &&
          data.master_university
        ) {
          let master_details = {
            university: req.body.master_university,
            cource: req.body.master_course_name,
            passingyear: req.body.master_passing_year,
            employee_id: employee_id,
            cgpa: req.body.master_cgpa,
            degree: "Master",
          };
          conn
            .query("insert into degree_detail SET ?", master_details)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async work_experience(req, res, employee_id) {
      try {
        let data = req.body;
        for (let i = 0; i < data.company_name.length; i++) {
          if (
            data.company_name[i] != "" &&
            data.work_experience_designation[i] != "" &&
            data.from[i] != "" &&
            data.to[i] != ""
          ) {
            let workExperience_details = {
              employee_id: employee_id,
              comname: data.company_name[i],
              designation: data.work_experience_designation[i],
              from: data.from[i],
              to: data.to[i],
            };
            conn
              .query(
                "insert into workexperience_detail SET ?",
                workExperience_details
              )
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async language(req, res, employee_id) {
      try {
        let data = req.body;
        for (let i = 0; i < data.language.length; i++) {
          let language_details = {
            employee_id: employee_id,
            language: data.language[i],
            read: `${data[`${data.language[i]}_read`]}` == 1 ? 1 : 0,
            write: `${data[`${data.language[i]}_write`]}` == 2 ? 1 : 0,
            speak: `${data[`${data.language[i]}_speak`]}` == 3 ? 1 : 0,
          };
          conn
            .query("insert into language_detail SET ?", language_details)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async technology(req, res, employee_id) {
      try {
        let data = req.body;
        for (let i = 0; i < data.technology.length; i++) {
          let technology_details = {
            employee_id: employee_id,
            technology: data.technology[i],
            beginer: `${data[`${data.technology[i]}_level`]}` == 1 ? 1 : 0,
            mideator: `${data[`${data.technology[i]}_level`]}` == 2 ? 1 : 0,
            expert: `${data[`${data.technology[i]}_level`]}` == 3 ? 1 : 0,
          };
          conn
            .query("insert into technology_detail SET ?", technology_details)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async reference(req, res, employee_id) {
      try {
        let data = req.body;
        for (let i = 0; i < data.referance_name.length; i++) {
          if (
            data.referance_name[i] != "" &&
            data.referance_number[i] != "" &&
            data.referance_relation != ""
          ) {
            let reference_details = {
              employee_id: employee_id,
              name: data.referance_name[i],
              number: data.referance_number[i],
              relation: data.referance_relation[i],
            };
            conn
              .query(
                "insert into refered_contact_detail SET ?",
                reference_details
              )
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = insertHelper;

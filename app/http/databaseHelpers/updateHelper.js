const conn = require("../../../mysql_connection");

const getDataHelper = require("./getDataHelper");

const updateHelper = () => {
  return {
    async basic_update(req, res, employee_id) {
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
        conn
          .query(
            `update  basic_detail SET ? where employee_id = ${employee_id}`,
            basic_details
          )
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async board_update(req, res, employee_id) {
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
            .query(
              `update board_detail SET ? where employee_id = ${employee_id} and board = '${item}'`,
              details
            )
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async degree_update(req, res, employee_id) {
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
          .query(
            `update degree_detail SET ? where employee_id = ${employee_id} and degree='Bechelor'`,
            bechlor_details
          )
          .then((res) => {})
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
            .query(
              `update degree_detail SET ? where employee_id = ${employee_id} and degree='Master'`,
              master_details
            )
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async work_experience_update(req, res, employee_id) {
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
                `update workexperience_detail SET ? where id=${data.work_id[i]}`,
                workExperience_details
              )
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async reference_update(req, res, employee_id) {
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
                `update refered_contact_detail SET ? where id= ${data.ref_id[i]}`,
                reference_details
              )
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async language_update(req, res, employee_id) {
      try {
        let languageDetail = await getDataHelper().language_detail(employee_id);
        let languages = [];
        languageDetail.forEach((item, i) => {
          languages[i] = item.language;
        });
        let data = req.body;
        for (let i = 0; i < data.language.length; i++) {
          let language_details = {
            employee_id: employee_id,
            language: data.language[i],
            read: `${data[`${data.language[i]}_read`]}` == 1 ? 1 : 0,
            write: `${data[`${data.language[i]}_write`]}` == 2 ? 1 : 0,
            speak: `${data[`${data.language[i]}_speak`]}` == 3 ? 1 : 0,
          };
          if (languages.includes(data.language[i])) {
            conn
              .query(
                `update language_detail SET ? where employee_id = ${employee_id} and language = '${data.language[i]}'`,
                language_details
              )
              .then(async (res) => {})
              .catch((err) => {
                console.log(err);
              });
          } else {
            conn
              .query("insert into language_detail SET ?", language_details)
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          }
        }

        if (languageDetail.length != data.language.length) {
          if (languageDetail.length > data.language.length) {
            languageDetail.forEach((item) => {
              if (!data.language.includes(item.language)) {
                conn
                  .query(
                    `delete from language_detail where employee_id = ${employee_id} and language = '${item.language}'`
                  )
                  .then((res) => {})
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async technology_update(req, res, employee_id) {
      try {
        let technologyDetail = await getDataHelper().technology_detail(
          employee_id
        );
        let data = req.body;
        let technologys = [];
        technologyDetail.forEach((item, i) => {
          technologys[i] = item.technology;
        });
        for (let i = 0; i < data.technology.length; i++) {
          let technology_details = {
            employee_id: employee_id,
            technology: data.technology[i],
            beginer: `${data[`${data.technology[i]}_level`]}` == 1 ? 1 : 0,
            mideator: `${data[`${data.technology[i]}_level`]}` == 2 ? 1 : 0,
            expert: `${data[`${data.technology[i]}_level`]}` == 3 ? 1 : 0,
          };
          if (technologys.includes(data.technology[i])) {
            conn
              .query(
                `update technology_detail SET ? where employee_id = ${employee_id} and technology = '${data.technology[i]}'`,
                technology_details
              )
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          } else {
            conn
              .query("insert into technology_detail SET ?", technology_details)
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          }
        }

        if (technologyDetail.length != data.technology.length) {
          if (technologyDetail.length > data.technology.length) {
            technologyDetail.forEach((item) => {
              if (!data.technology.includes(item.technology)) {
                conn
                  .query(
                    `delete from technology_detail where employee_id = ${employee_id} and technology = '${item.technology}'`
                  )
                  .then((res) => {})
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = updateHelper;

const getDataHelper = require("../../databaseHelpers/getDataHelper");
const updateHelper = require("../../databaseHelpers/updateHelper");
const comboGenerate = require("./comboGenerate");
const moment = require("moment");

const updateController = () => {
  return {
    async getform(req, res) {
      try {
        let employee_id = req.query.id;
        let basic_detail = await getDataHelper().basic_detail(employee_id);
        if (!basic_detail) {
          return res.send("User not available");
        }

        let board_detail = await getDataHelper().board_detail(employee_id);
        let degree_detail = await getDataHelper().degree_detail(employee_id);
        let technology_detail = await getDataHelper().technology_detail(
          employee_id
        );
        let language_detail = await getDataHelper().language_detail(
          employee_id
        );
        let refered_detail = await getDataHelper().refered_detail(employee_id);
        let work_detail = await getDataHelper().work_experience_detail(
          employee_id
        );

        let company_name = [];
        let work_experience_designation = [];
        let from = [];
        let to = [];
        let work_id = [];
        work_detail.forEach((item, index) => {
          company_name[index] = item.comname;
          work_experience_designation[index] = item.designation;
          from[index] = moment(item.from).format("YYYY-MM-DD");
          to[index] = moment(item.to).format("YYYY-MM-DD");
          work_id[index] = item.id;
        });

        let referance_name = [];
        let referance_number = [];
        let referance_relation = [];
        let ref_id = [];

        refered_detail.forEach((item, index) => {
          referance_name[index] = item.name;
          referance_number[index] = item.number;
          referance_relation[index] = item.relation;
          ref_id[index] = item.id;
        });

        let data = {
          userid: employee_id,
          first_name: basic_detail.firstname,
          last_name: basic_detail.lastname,
          basic_designation: basic_detail.designation,
          email: basic_detail.email,
          state: basic_detail.state,
          relationship_status: basic_detail.status,
          gender: basic_detail.gender,
          phone: basic_detail.phoneno,
          dob: moment(basic_detail.dob).format("YYYY-MM-DD"),
          city: basic_detail.city,
          zipcode: basic_detail.zipcode,
          address1: basic_detail.address1,
          address2: basic_detail.address2,
          board_name: [
            board_detail[0].nameofboard,
            board_detail[1].nameofboard,
          ],
          passing_year: [
            board_detail[0].passing_year,
            board_detail[1].passing_year,
          ],
          percentage: [board_detail[0].percentage, board_detail[1].percentage],
          bachelor_course_name: degree_detail[0].cource,
          bachelor_university: degree_detail[0].university,
          bachelor_passing_year: degree_detail[0].passingyear,
          bachelor_cgpa: degree_detail[0].cgpa,
          master_course_name: degree_detail[1] ? degree_detail[1].cource : "",
          master_university: degree_detail[1]
            ? degree_detail[1].university
            : "",
          master_passing_year: degree_detail[1]
            ? degree_detail[1].passingyear
            : "",
          master_cgpa: degree_detail[1] ? degree_detail[1].cgpa : "",
          company_name: company_name,
          work_experience_designation: work_experience_designation,
          from: from,
          to: to,
          work_id: work_id,
          referance_name: referance_name,
          referance_number: referance_number,
          referance_relation: referance_relation,
          ref_id: ref_id,
          prefered_location: basic_detail.prefered_location,
          preferance_notice: basic_detail.notic_period,
          preferance_expec_ctc: basic_detail.expected_ctc,
          preferance_curr_ctc: basic_detail.current_ctc,
          department: basic_detail.department,
        };

        let language = [];
        language_detail.forEach((item, i) => {
          language[i] = item.language;
          if (item.read == "1") {
            data[`${item.language}_read`] = "1";
          }
          if (item.write == "1") {
            data[`${item.language}_write`] = "2";
          }
          if (item.speak == "1") {
            data[`${item.language}_speak`] = "3";
          }
        });
        data["language"] = language;

        let technology = [];
        technology_detail.forEach((item, i) => {
          technology[i] = item.technology;
          if (item.beginer == "1") {
            data[`${item.technology}_level`] = "1";
          }
          if (item.mideator == "1") {
            data[`${item.technology}_level`] = "2";
          }
          if (item.expert == "1") {
            data[`${item.technology}_level`] = "3";
          }
        });
        data["technology"] = technology;

        let genderRadio = await comboGenerate(
          "gender_radio",
          basic_detail.gender
        );
        let relationShipCombo = await comboGenerate(
          "relationship_combo",
          basic_detail.status
        );
        let locationCombo = await comboGenerate(
          "prefered_location_combo",
          basic_detail.prefered_location
        );
        let departmentCombo = await comboGenerate(
          "department_combo",
          basic_detail.department
        );
        let statesCombo = await comboGenerate(
          "state_combo",
          basic_detail.state
        );

        let combos = {
          genderRadio,
          relationShipCombo,
          locationCombo,
          departmentCombo,
          statesCombo,
        };
        if (req.get("xml")) {
          res.json({ data });
        } else {
          res.render("component/jobApplication/insertForm", {
            combos,
            data,
            layout: "layouts/job_application_layout.ejs",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateData(req, res) {
      let employee_id = req.body.userid;
      try {
        try {
          let result = await updateHelper().basic_update(req, res, employee_id);
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().board_update(req, res, employee_id);
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().degree_update(
            req,
            res,
            employee_id
          );
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().work_experience_update(
            req,
            res,
            employee_id
          );
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().reference_update(
            req,
            res,
            employee_id
          );
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().language_update(
            req,
            res,
            employee_id
          );
        } catch (error) {
          res.send(error.sqlMessage);
        }
        try {
          let result = await updateHelper().technology_update(
            req,
            res,
            employee_id
          );
        } catch (error) {
          res.send(error.sqlMessage);
        }
        if (req.get("xml")) {
          res.send({ alert: "Data updated " });
        } else {
          return res.redirect(`/jobApplication/updateform?id=${employee_id}`);
        }
      } catch (error) {
        console.log("hello", error);
      }
    },
  };
};

module.exports = updateController;

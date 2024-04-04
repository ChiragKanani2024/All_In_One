const conn = require("../../../../mysql_connection");

const deleteDataController = () => {
  return {
    async deleteData(req, res) {
      try {
        let employee_id = req.query.id;

        let result = await conn.query(
          `delete from board_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from workexperience_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from degree_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from language_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from technology_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from refered_contact_detail where employee_id = ${employee_id}`
        );

        result = await conn.query(
          `delete from basic_detail where employee_id = ${employee_id}`
        );

        res.redirect("/job_application");
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = deleteDataController;

const getDataHelper = require("../../databaseHelpers/getDataHelper");

const getDataController = () => {
  return {
    async getData(req, res) {
      try {
        let result = await getDataHelper().basic_detail_all();
        res.render("component/jobApplication/listing", {
          data: result,
          layout: "layouts/job_application_layout.ejs",
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = getDataController;

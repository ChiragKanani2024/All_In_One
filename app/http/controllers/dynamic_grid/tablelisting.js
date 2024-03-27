const selectquery = require("../../databaseHelpers/selectquery");

const tablelisting = async (query, limit, offset) => {
  try {
    let data = await selectquery.selectData(query, limit, offset);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = tablelisting;

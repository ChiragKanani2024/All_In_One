const conn = require("../../../mysql_connection");

const selectData = async (query, limit = 0, offset = 0) => {
  try {
    let result = await conn.query(`${query} limit ${offset},${limit}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const selectDataCount = async (query) => {
  try {
    let result = await conn.query(
      `select count(*) as dataCount from (${query}) as r`
    );
    return result[0][0];
  } catch (error) {
    console.log(error);
  }
};

const tableList = async () => {
  try {
    let result = await conn.query("show tables");
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  selectData,
  selectDataCount,
  tableList,
};

const conn = require("../../../mysql_connection");

const selectData = async (query, limit = 0, offset = 0) => {
  let result = await conn.query(`${query} limit ${offset},${limit}`);
  return result;
};

const selectDataCount = async (query) => {
  let result = await conn.query(
    `select count(*) as dataCount from (${query}) as r`
  );
  return result[0][0];
};

const tableList = async () => {
  let result = await conn.query("show tables");
  return result[0];
};

module.exports = {
  selectData,
  selectDataCount,
  tableList,
};

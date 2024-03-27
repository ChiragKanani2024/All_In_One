const mysql  = require("mysql2");

const connection = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
    database        : 'all_in_one'
}).promise()

module.exports = connection;
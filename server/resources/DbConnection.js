var mysql = require("mysql");
var connection = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  host: "localhost",
  password: "password",
  database: "workforceManagement",
});
exports.connection = connection;

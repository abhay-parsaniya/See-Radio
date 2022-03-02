const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "mitanshu",
  password: "12345",
  database: "see radio 1",
});

module.exports = db;

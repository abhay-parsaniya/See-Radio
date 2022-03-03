const mysql = require("mysql");
const { user, password } = require("./keys");

const db = mysql.createConnection({
  host: "localhost",
  user: "mitanshu",
  password: "546525",
  database: "see radio 1",
});

module.exports = db;

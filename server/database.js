const mysql = require("mysql");
const { user, password } = require("./keys");

const db = mysql.createConnection({
  host: "localhost",
  user: user,
  password: password,
  database: "see radio 1",
});

module.exports = db;

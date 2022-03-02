const mysql = require("mysql");

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '~qT4hDB6Ge+aFXe',
    database : 'see radio 1'
});

module.exports = db;
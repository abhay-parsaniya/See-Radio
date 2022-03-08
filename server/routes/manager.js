const express = require("express");
const router = express.Router();
const db = require("../database");
const { route } = require("./auth");
// const adminLoginRequire = require("../middleware/adminLoginRequire");

router.get("/managers", (req, res) => {
  const sqls =
    "SELECT idaccountmanager, manager_name, manager_email FROM accountmanager;";
  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

module.exports = router;

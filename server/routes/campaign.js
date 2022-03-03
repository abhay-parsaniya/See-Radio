const express = require("express");
const router = express.Router();
const db = require("../database");
const { route } = require("./auth");

router.get("/campaigns", (req, res) => {
  //   const sqls = "SELECT idcampaign, designer, request FROM campaign;";

  const sqls = `SELECT u.campaigntitle, u.idcampaign, s.firstname, s.lastname, p.firstName, p.LastName, p.companyName, p.productName FROM campaign u 
                    INNER JOIN designer s ON u.designer = s.id
                    INNER JOIN newrequest p ON u.request = p.idnewrequest`;

  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.get("/campaigns/:id", (req, res) => {
  let id = req.params.id;

  const sqls = `SELECT u.*, s.*, p.* FROM campaign u 
                    INNER JOIN designer s ON u.designer = s.id
                    INNER JOIN newrequest p ON u.request = p.idnewrequest 
                    WHERE u.idcampaign = ?`;

  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

module.exports = router;

// SELECT u.*, s.*
// FROM campaign u
//     inner join designer s on u.designer = s.id
// WHERE u.status_id = 1

// connection.query("SELECT ?; SELECT ?", [1, 2], function (err, results) {
//   if (err) throw err;

//   // `results` is an array with one element for every statement in the query:
//   console.log(results[0]); // [{1: 1}]
//   console.log(results[1]); // [{2: 2}]
// });

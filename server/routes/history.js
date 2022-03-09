const express = require("express");
const router = express.Router();
const db = require("../database");
const adminLoginRequire = require("../middleware/adminLoginRequire");

router.get("/adminaccountmanagerhistorydata", adminLoginRequire, (req, res) => {
    db.query(
        "SELECT firstName, lastname, companyName, productName, budget, targetViews, Status FROM newrequest",
        (err, resultHistoryData) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({ resultHistoryData });
          }
        }
      );
});

module.exports = router;
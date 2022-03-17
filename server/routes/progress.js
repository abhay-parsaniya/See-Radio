const express = require("express");
const router = express.Router();
const db = require("../database");
const clientLoginRequire = require("../middleware/clientLoginRequire");
const adminLoginRequire = require("../middleware/adminLoginRequire");

const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");

router.post("/clientrequestprogress", clientLoginRequire, (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECREAT_KEY, (err, payload) => {
    if (err) console.log(err);
    else {
      const id = payload.idclient;
      db.query(
        "SELECT * FROM newrequest WHERE user_client_id = ? ORDER BY request_date_time DESC",
        id,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({ result });
          }
        }
      );
    }
  });
});

module.exports = router;

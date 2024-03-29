const express = require("express");
const router = express.Router();
const db = require("../database");
const transporter = require("../SendEmail");
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
        "SELECT * FROM newrequest WHERE user_client_id = ? ORDER BY request_date_time DESC;select campaign_current_views from distribution_partner where campaign_id = ( select idcampaign from campaign where request = (select idnewrequest from newrequest where user_client_id = ? limit 1) limit 1) limit 1;",
        [id, id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.status(200).json({ result });
          }
        }
      );
    }
  });
});

router.post("/clientvideourl", clientLoginRequire, (req, res) => {
  console.log(req.body);
  const { client_video_id } = req.body;
  const { authorization } = req.headers;

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, JWT_SECREAT_KEY, (err, payload) => {
    if (err) console.log(err);
    else {
      db.query(
        "SELECT idcampaign, campaign_video_url,client_approval_status FROM campaign WHERE request = ?",
        [client_video_id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.status(200).json({ result });
          }
        }
      );
    }
  });
});

router.post("/clientapprovalvideo", clientLoginRequire, (req, res) => {
  const { status, approvedid } = req.body;

  db.query(
    "UPDATE campaign SET client_approval_status = ? WHERE request = ?; UPDATE newrequest SET progress = 50 WHERE idnewrequest = ?;",
    [status, approvedid, approvedid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        db.query(
          "SELECT * FROM campaign WHERE request = ?",
          [approvedid],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              // console.log(result[0]);
              const mailOptions = {
                from: transporter.options.auth.user,
                to: "abhayparsaniya08@gmail.com",
                subject: "Video Approved !!",
                html: `<h2>Client Approved Video with Campaign Id ${result[0].idcampaign} and Campaign Title is ${result[0].campaigntitle}</h2>`,
              };
              transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                  console.error("there was an error: ", err);
                } else {
                  console.log("here is the res: ", res);
                }
              });
              return res
                .status(200)
                .json({ msg: "Video Approved Successfully !!" });
            }
          }
        );
      }
    }
  );
});

router.post("/clientrejectedvideo", clientLoginRequire, (req, res) => {
  let status = "Pending";
  const { status_old, rejectedid } = req.body;

  db.query(
    "UPDATE campaign SET client_approval_status = ? WHERE request = ?; UPDATE newrequest SET progress = 25 WHERE idnewrequest = ?; UPDATE campaign SET campaign_video_url = ? WHERE request = ?;",
    [status, rejectedid, rejectedid, '', rejectedid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        db.query(
          "SELECT * FROM campaign WHERE request = ?",
          [rejectedid],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              // console.log(result[0]);
              const mailOptions = {
                from: transporter.options.auth.user,
                to: "abhayparsaniya08@gmail.com",
                subject: "Video Rejected !!",
                html: `<h2>Client Rejected Video with Campaign Id ${result[0].idcampaign} and Campaign Title is ${result[0].campaigntitle}</h2>`,
              };
              transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                  console.error("there was an error: ", err);
                } else {
                  console.log("here is the res: ", res);
                }
              });
              return res.status(200).json({ msg: "Video Rejected !!" });
            }
          }
        );
      }
    }
  );
});

module.exports = router;

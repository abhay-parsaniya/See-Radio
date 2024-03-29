const express = require("express");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");
const { route } = require("./auth");
const transporter = require("../SendEmail");
const adminLoginRequire = require("../middleware/adminLoginRequire");
const designerLoginRequire = require("../middleware/designerLoginRequire");

router.get("/distributordetail/:id", adminLoginRequire, (req, res) => {
  let id = req.params.id;

  const sqls =
    "SELECT * FROM distribution_partner WHERE iddistribution_partner = ?;";
  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.get("/deletedistributor/:id", adminLoginRequire, (req, res) => {
  let id = req.params.id;

  const sqls =
    "DELETE FROM distribution_partner WHERE iddistribution_partner = ?;";
  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else {
      if (result.length > 0) res.send(result);
    }
  });
});

router.get("/approvedcampaignvideo", adminLoginRequire, (req, res) => {
  const sqls = `SELECT idcampaign, request, campaigntitle FROM campaign WHERE client_approval_status = "Approved";`;
  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.get("/distributors", adminLoginRequire, (req, res) => {
  const sqls =
    "SELECT iddistribution_partner, distribution_partner_name, distribution_partner_contact, distribution_partner_email, distribution_partner_experience, distribution_partner_city, distribution_partner_influencers FROM distribution_partner;";
  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.post("/adddistributor", adminLoginRequire, (req, res) => {
  const formData = req.body;
  // console.log(formData);

  for (let key in formData) {
    if (formData[key] == "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "SELECT distribution_partner_email FROM distribution_partner WHERE distribution_partner_email = ?",
    [formData.designeremail],
    async (err, result) => {
      if (err) {
        return console.log(err);
      }
      if (result.length > 0) {
        return res.status(422).json({ error: "Email id already exist" });
      } else {
        db.query(
          "INSERT INTO distribution_partner (distribution_partner_name, distribution_partner_contact, distribution_partner_email, distribution_partner_experience, distribution_partner_city, distribution_partner_influencers) values (?, ?, ?, ?, ?, ?)",
          [
            formData.distribution_name,
            formData.distribution_contactno,
            formData.distribution_email,
            formData.distribution_experience,
            formData.distribution_city,
            formData.distribution_influencer,
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              // console.log(result);
              const mailOptions = {
                from: transporter.options.auth.user,
                to: formData.distribution_email,
                subject: "See Radio Distribution Partner",
                html: `<h2>Congratulations, You Selected as Distribution Partner at See Radio. Welcome to the See Radio !!</h2>`,
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
                .json({ msg: "Distribution Partner Added Successfully !!" });
            }
          }
        );
      }
    }
  );
});

router.post("/assigndistributor", adminLoginRequire, (req, res) => {
  const distributorvideodata = req.body;
  console.log(distributorvideodata.requestId);

  for (let key in distributorvideodata) {
    if (distributorvideodata[key] === "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "UPDATE distribution_partner SET campaign_id = ? WHERE iddistribution_partner = ?",
    [distributorvideodata.approvedVideo, distributorvideodata.distributor],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          "UPDATE newrequest SET progress = 75 WHERE idnewrequest = ?",
          [distributorvideodata.requestId],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
        console.log(result);
        return res.status(200).json({ msg: "Distribution Partner Assigned Successfully !!" });
      }
    }
  );
});

router.get("/assigneddistributionlist", (req, res) => {
  const sqls = `SELECT u.*, c.*, n.productName, n.budget, n.targetViews, n.advertisementScope FROM distribution_partner u 
                    INNER JOIN campaign c ON u.campaign_id = c.idcampaign
                    INNER JOIN newrequest n ON c.request = n.idnewrequest;`;

  // get campaign details later

  db.query(sqls, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ result });
    }
  });
});

router.get("/getcurrentviews", adminLoginRequire, (req, res) => {

  const idviews = req.headers.id;
  
  const sqls = `SELECT campaign_current_views FROM distribution_partner WHERE iddistribution_partner = ?`;

  db.query(sqls, [idviews], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send({ result });
    }
  });
});

router.post("/postcurrentviews", adminLoginRequire, (req, res) => {

  const {id, currViews, newrequestid} = req.body;
  
  const sqls = `UPDATE distribution_partner SET campaign_current_views = ? WHERE iddistribution_partner = ?`;

  db.query(sqls, [currViews, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      
      db.query('SELECT * FROM newrequest WHERE idnewrequest = ?', [newrequestid], (err, result) => {
        if(err)
        {
          console.log(err);
        }
        else{
          // console.log(result[0])
          const {email, targetViews, progress} = result[0];
          // console.log(email, targetViews)
          if(progress < 80)
          {
            if(currViews >= targetViews)
            {
              db.query(
                "UPDATE newrequest SET progress = 100 WHERE idnewrequest = ?",
                [newrequestid],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // console.log(result);
                    const mailOptions = {
                      from: transporter.options.auth.user,
                      to: [email, "abhayparsaniya08@gmail.com"],
                      subject: "Target Views Achived !!",
                      html: `<h1>Congratulations, Your Target Views Achived !!.</h1> <br> <h1> Your Target Views are ${targetViews} and Current Views are ${currViews}.</h1>`,
                    };
                    transporter.sendMail(mailOptions, function (err, res) {
                      if (err) {
                        console.error("there was an error: ", err);
                      } else {
                        console.log("here is the res: ", res);
                      }
                    });
                  }
                }
              );
            }
          }
        }
      })
      // res.send({ result });
    }
  });
});

module.exports = router;

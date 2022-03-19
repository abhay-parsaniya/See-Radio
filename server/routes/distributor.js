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
                html: `<p>Congratulations, You Selected as Distribution Partner at See Radio. Welcome to the See Radio !!</p> <br> <h3>Your Credentials are Mentioned Below.<h3>`,
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
                .json({ msg: "Designer Added Successfully !!" });
            }
          }
        );
      }
    }
  );
});


module.exports = router;

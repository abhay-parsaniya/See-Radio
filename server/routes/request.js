const express = require("express");
const router = express.Router();
const db = require("../database");
const transporter = require("../SendEmail");
const clientLoginRequire = require("../middleware/clientLoginRequire");
const adminLoginRequire = require("../middleware/adminLoginRequire");
const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");

router.post("/newrequest", clientLoginRequire, (req, res) => {
  const details = req.body;
  // console.log(details);
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");

  const { formData, secure_url } = details;

  // console.log(formData, secure_url);

  formData.infofile = undefined;

  // console.log(formData, secure_url);

  for (let key in formData) {
    if (formData[key] == "" || secure_url == "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  jwt.verify(token, JWT_SECREAT_KEY, (err, payload) => {
    if (err) console.log(err);
    else {
      const id = payload.idclient;
      db.query(
        "INSERT INTO newrequest (firstName, lastName, email, contactno, address, city, state, country, zip, companyName, companyEmail, companyContactno, companyScope, companyAddress, companyCity, companyState, companyCountry, companyZip, productName, budget, productScope, advertisementScope, targetViews, file_url, Status, user_client_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.contactno,
          formData.address,
          formData.city,
          formData.clientState,
          formData.country,
          formData.zip,
          formData.companyName,
          formData.companyEmail,
          formData.companyContactno,
          formData.companyScope,
          formData.companyAddress,
          formData.companyCity,
          formData.companyState,
          formData.companyCountry,
          formData.companyZip,
          formData.productName,
          formData.budget,
          formData.productScope,
          formData.advertisementScope,
          formData.targetViews,
          secure_url,
          "Pending",
          id,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            const mailOptions = {
              from: auth.user,
              to: formData.email,
              subject: "Request Sent Successfully !!",
              text: "Your Request is Successfully Submitted to the System. Your Request Status is Pending. Kindly Sync With us and Wait for Response.",
            };
            transporter.sendMail(mailOptions, function (err, res) {
              if (err) {
                console.error("there was an error: ", err);
              } else {
                console.log("here is the res: ", res);
              }
            });
            return res.status(200).json({ msg: "Request Sent Successfully !!" });
          }
        })
      }
  })
});

router.get("/pendingrequest", adminLoginRequire, (req, res) => {
  let status = "Pending";

  db.query(
    "SELECT * FROM newrequest WHERE Status = ?",
    [status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
});

router.post("/approvedrequest", adminLoginRequire, (req, res) => {
  const { status, approvedid } = req.body;

  db.query("UPDATE newrequest SET Status = ? WHERE idnewrequest = ?", [status, approvedid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      db.query("SELECT email FROM newrequest WHERE idnewrequest = ?", [approvedid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result[0].email);
          const mailOptions = {
            from: transporter.options.auth.user,
            to: result[0].email,
            subject: "Request Approved",
            text: "Congratulations, Your Request is Approved !!",
          };
          transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
              console.error("there was an error: ", err);
            } else {
              console.log("here is the res: ", res);
            }
          });
          return res.status(200).json({ msg: "Request Approved !!" });
        }
      });
    }
  });
});

router.get("/approvedrequest", adminLoginRequire, (req, res) => {
  let status = "Approved";

  db.query(
    "SELECT * FROM newrequest WHERE Status = ?",
    [status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
});

router.post("/rejectedrequest", adminLoginRequire, (req, res) => {
  const { status, rejectedid } = req.body;

  db.query("UPDATE newrequest SET Status = ? WHERE idnewrequest = ?", [status, rejectedid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      db.query("SELECT email FROM newrequest WHERE idnewrequest = ?", [rejectedid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result[0].email);
          const mailOptions = {
            from: transporter.options.auth.user,
            to: result[0].email,
            subject: "Request Rejected",
            text: "Sorry, Your Request is Rejected.",
          };
          transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
              console.error("there was an error: ", err);
            } else {
              console.log("here is the res: ", res);
            }
          });
          return res.status(200).json({ msg: "Request Rejected" });
        }
      });
    }
  });
});

router.get("/rejectedrequest", adminLoginRequire, (req, res) => {
  let status = "Rejected";

  db.query(
    "SELECT * FROM newrequest WHERE Status = ?",
    [status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../database");
const clientLoginRequire = require("../middleware/clientLoginRequire");
const adminLoginRequire = require("../middleware/adminLoginRequire");

router.post("/newrequest", clientLoginRequire, (req, res) => {
  const details = req.body;
  // console.log(details);

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

  db.query(
    "INSERT INTO newrequest (firstName, lastName, email, contactno, address, city, state, country, zip, companyName, companyEmail, companyContactno, companyScope, companyAddress, companyCity, companyState, companyCountry, companyZip, productName, budget, productScope, advertisementScope, targetViews, file_url, Status) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        return res.status(200).json({ msg: "Request Sent Successfully !!" });
      }
    }
  );
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

  db.query(
    "UPDATE newrequest SET Status = ? WHERE idnewrequest = ?",
    [status, approvedid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        return res
          .status(200)
          .json({ msg: "Your Request is Approved Successfully !!" });
      }
    }
  );
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

  db.query(
    "UPDATE newrequest SET Status = ? WHERE idnewrequest = ?",
    [status, rejectedid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        return res.status(200).json({ msg: "Your Request is Rejected !!" });
      }
    }
  );
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

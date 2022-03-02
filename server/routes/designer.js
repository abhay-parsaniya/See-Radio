const express = require("express");
const router = express.Router();
const db = require("../database");
const { route } = require("./auth");
// const adminLoginRequire = require("../middleware/adminLoginRequire");

// router.get("/deletedesigner/:id", (req, res) => {
//   var id = req.params.id;

//   const sqls = "DELETE FROM designer WHERE id= ?;";
//   db.query(sqls, [id], (req, res) => {
//     if (err) console.log(err);
//     else res.send(res);
//   });
// });

router.get("/designers", (req, res) => {
  const sqls =
    "SELECT id, firstname, lastname, email, contactno, city, qualification, experience FROM designer;";
  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.post("/adddesigner", (req, res) => {
  const formData = req.body;
  console.log(formData);

  for (let key in formData) {
    if (formData[key] == "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "INSERT INTO designer (firstname, lastname, email, contactno, city, qualification, experience) values (?, ?, ?, ?, ?, ?, ?)",
    [
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.contactno,
      formData.city,
      formData.qualification,
      formData.experience,
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

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../database");
const { route } = require("./auth");

router.get("/campaigns", (req, res) => {
  //   const sqls = "SELECT idcampaign, designer, request FROM campaign;";

  const sqls = `SELECT u.campaigntitle, u.idcampaign, s.firstname, s.lastname, s.designeremail, s.experience, s.designercity, p.firstName, p.LastName, p.companyName, p.productName, p.budget FROM campaign u 
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

router.post("/addcampaign", (req, res) => {
  const formData = req.body;
  console.log(formData);

  for (let key in formData) {
    if (formData[key] === "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "INSERT INTO campaign (designer, request, campaigntitle) values (?, ?, ?)",
    [formData.designer, formData.request, formData.title],
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

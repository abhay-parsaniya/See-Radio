const express = require("express");
const router = express.Router();
const db = require("../database");
const { route } = require("./auth");
const adminLoginRequire = require("../middleware/adminLoginRequire");

router.get("/campaigns", adminLoginRequire, (req, res) => {
  //   const sqls = "SELECT idcampaign, designer, request FROM campaign;";

  const sqls = `SELECT u.campaigntitle, u.idcampaign, u.campaign_video_url, s.firstname, s.lastname, s.designeremail, s.experience, s.designercity, p.firstName, p.LastName, p.companyName, p.productName, p.budget, t.manager_name, t.manager_email FROM campaign u 
                    INNER JOIN designer s ON u.designer = s.iddesigner
                    INNER JOIN newrequest p ON u.request = p.idnewrequest
                    INNER JOIN accountmanager t ON u.manager = t.idaccountmanager`;

  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.get("/campaigns/:id", (req, res) => {
  let id = req.params.id;

  const sqls = `SELECT u.*, s.*, p.*, t.manager_name, t.manager_email FROM campaign u 
                    INNER JOIN designer s ON u.designer = s.iddesigner
                    INNER JOIN newrequest p ON u.request = p.idnewrequest 
                    INNER JOIN accountmanager t ON u.manager = t.idaccountmanager 
                    WHERE u.idcampaign = ?`;

  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.post("/addcampaign", adminLoginRequire, (req, res) => {
  const formData = req.body;
  console.log(formData);

  for (let key in formData) {
    if (formData[key] === "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "INSERT INTO campaign (designer, request, manager, campaigntitle) values (?, ?, ?, ?)",
    [formData.designer, formData.request, formData.manager, formData.title],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          "UPDATE newrequest SET progress = 20 WHERE idnewrequest = ?",
          [formData.request],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
        console.log(result);
        return res.status(200).json({ msg: "Request Sent Successfully !!" });
      }
    }
  );
});
module.exports = router;

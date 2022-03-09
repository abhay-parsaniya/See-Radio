const express = require("express");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");
const { route } = require("./auth");
const transporter = require("../SendEmail");
const adminLoginRequire = require("../middleware/adminLoginRequire");

router.get("/designerdetail/:id", adminLoginRequire, (req, res) => {
  let id = req.params.id;

  const sqls = "SELECT * FROM designer WHERE iddesigner = ?;";
  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.get("/deletedesigner/:id", adminLoginRequire, (req, res) => {
  let id = req.params.id;

  const sqls = "DELETE FROM designer WHERE iddesigner = ?;";
  db.query(sqls, id, (err, result) => {
    if (err) console.log(err);
    else {
      if (result.length > 0) res.send(result);
    }
  });
});

router.get("/designers", adminLoginRequire, (req, res) => {
  const sqls =
    "SELECT iddesigner, firstname, lastname, designeremail, designercontactno, designercity, qualification, experience FROM designer;";
  db.query(sqls, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

router.post("/adddesigner", adminLoginRequire, (req, res) => {
  const formData = req.body;
  // console.log(formData);

  for (let key in formData) {
    if (formData[key] == "") {
      // console.log(key);
      return res.status(422).json({ error: "Please fill all the fields !!" });
    }
  }

  db.query(
    "SELECT designeremail FROM designer WHERE designeremail = ?",
    [formData.designeremail],
    async (err, result) => {
      if (err) {
        return console.log(err);
      }
      if (result.length > 0) {
        return res.status(422).json({ error: "Email id already exist" });
      }
      else{
        let designerhashedpassword = await bcrypt.hash(formData.designerpassword, 11);

        db.query(
          "INSERT INTO designer (firstname, lastname, designeremail, designercontactno, experience, qualification, designercity, designerpassword) values (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            formData.firstname,
            formData.lastname,
            formData.designeremail,
            formData.designercontactno,
            formData.experience,
            formData.qualification,
            formData.designercity,
            designerhashedpassword
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              // console.log(result);
              const mailOptions = {
                from: transporter.options.auth.user,
                to: formData.designeremail,
                subject: "See Radio Designer",
                html: `<p>Congratulations, You Selected as Graphics Designer at See Radio. Welcome to the See Radio !!</p> <br> <h3>Your Credentials are Mentioned Below.<h3> <br> <h4>Username: ${formData.designeremail}</h4> <br> <h4>Password: ${formData.designerpassword}</h4>`
              };
              transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                  console.error("there was an error: ", err);
                } else {
                  console.log("here is the res: ", res);
                }
              });
              return res.status(200).json({ msg: "Designer Added Successfully !!" });
            }
          }
        );
      }
  });
});

router.post("/signindesigner", (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please fill all fields" });
  } else {
    db.query(
      "SELECT designeremail FROM designer WHERE designeremail = ?",
      [email],
      (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          // console.log(result);
          if (result.length <= 0) {
            return res
              .status(422)
              .json({ error: "Invalid username or password" });
          } else {
            db.query(
              "SELECT iddesigner, firstname, lastname, designeremail, designerpassword FROM designer WHERE designeremail = ?",
              [email],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(result[0].designerpassword);
                  bcrypt
                    .compare(password, result[0].designerpassword)
                    .then((doMatch) => {
                      if (doMatch) {
                        const token = jwt.sign(
                          { iddesigner: result[0].iddesigner },
                          JWT_SECREAT_KEY
                        );
                        const { iddesigner, firstname, lastname, designeremail } = result[0];
                        res
                          .status(200)
                          .json({ token, user: { iddesigner, firstname, lastname, designeremail } });
                        // return res.status(200).json({ msg: "Login Successful !!" });
                      } else {
                        return res
                          .status(422)
                          .json({ error: "Invalid Username or Password" });
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }
            );
          }
          module.exports = router;
        }
      }
    );
  }
});

module.exports = router;
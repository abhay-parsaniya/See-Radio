const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database");
const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");
const transporter = require("../SendEmail");

router.post("/signupclient", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(422).json({ error: "please fill all field" });
  } else {
    // res.json({msg: "Successful posted !!"});

    db.query(
      "SELECT email FROM client WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return console.log(err);
        }
        if (result.length > 0) {
          return res.status(422).json({ error: "Email id already exist" });
        } else {
          let hashedpassword = await bcrypt.hash(password, 11);
          // console.log(hashedpassword);
          db.query(
            "INSERT INTO client (name, email, password) values (?,?,?)",
            [name, email, hashedpassword],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                // console.log(result);
                const mailOptions = {
                  from: transporter.options.auth.user,
                  to: email,
                  subject: "SignUp Success",
                  text: "Welcome to the See Radio Portal !!",
                };
                transporter.sendMail(mailOptions, function (err, res) {
                  if (err) {
                    console.error("there was an error: ", err);
                  } else {
                    console.log("here is the res: ", res);
                  }
                });
                
                return res.status(200).json({ msg: "Signup Successfull !!" });
              }
            }
          );
        }
      }
    );

    // Client.findOne({ email: email })
    // .then((savedUser) => {
    //     if(savedUser)
    //     {
    //         return res.status(422).json({error: "Email id already exist"});
    //     }
    //     else{
    //         bcrypt.hash(password, 12)
    //         .then((hashed_password) => {
    //             const client = new Client({
    //                 name,
    //                 email,
    //                 password : hashed_password
    //             });

    //             client.save()
    //             .then(( client ) => {
    //                 res.json({msg: "Saved Successfully !!"});
    //             })
    //             .catch(( err ) => {
    //                 console.log(err);
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     }
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
  }
});

router.post("/signinadmin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "please fill all fields" });
  } else {
    db.query(
      "SELECT email FROM admin WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          if (result.length <= 0) {
            return res
              .status(422)
              .json({ error: "Invalid username or password" });
          } else {
            db.query(
              "SELECT * FROM admin WHERE email = ?",
              [email],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(result[0].password);
                  if (password === result[0].password) {
                    const token = jwt.sign(
                      { idadmin: result[0].idadmin },
                      JWT_SECREAT_KEY
                    );
                    const { idadmin, name, email } = result[0];
                    res
                      .status(200)
                      .json({ token, user: { idadmin, name, email } });
                    // return res.status(200).json({msg: "Login Successfull !!"});
                  } else {
                    return res
                      .status(422)
                      .json({ error: "Invalid Email or password" });
                  }
                }
              }
            );
          }
        }
      }
    );
    // Admin.findOne({ email: email })
    // .then((savedUser) => {
    //     if(!savedUser)
    //     {
    //         return res.status(422).json({ error: "Invalid Username or Password" });
    //     }
    //     if (password === savedUser.password) {
    //         const token = jwt.sign({ _id: savedUser._id }, JWT_SECREAT_KEY);
    //         const {_id, name, email} = savedUser;
    //         res.json({token, user: {_id, name, email}});
    //     } else {
    //         return res.status(422).json({ error: "Invalid Email or password" });
    //     }
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
  }
});

router.post("/signinaccountmanager", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "please fill all fields" });
  } else {
    db.query(
      "SELECT email FROM accountmanager WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          if (result.length <= 0) {
            return res
              .status(422)
              .json({ error: "Invalid username or password" });
          } else {
            db.query(
              "SELECT * FROM accountmanager WHERE email = ?",
              [email],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(result[0].password);
                  if (password === result[0].password) {
                    const token = jwt.sign(
                      { idaccountmanager: result[0].idaccountmanager },
                      JWT_SECREAT_KEY
                    );
                    const { idaccountmanager, name, email } = result[0];
                    res
                      .status(200)
                      .json({ token, user: { idaccountmanager, name, email } });
                    // return res.status(200).json({msg: "Login Successfull !!"});
                  } else {
                    return res
                      .status(422)
                      .json({ error: "Invalid Email or password" });
                  }
                }
              }
            );
          }
        }
      }
    );
    // AccountManager.findOne({ email: email })
    // .then((savedUser) => {
    //     if(!savedUser)
    //     {
    //         return res.status(422).json({ error: "Invalid Username or Password" });
    //     }
    //     if (password === savedUser.password) {
    //         const token = jwt.sign({ _id: savedUser._id }, JWT_SECREAT_KEY);
    //         const {_id, name, email} = savedUser;
    //         res.json({token, user: {_id, name, email}});
    //     } else {
    //         return res.status(422).json({ error: "Invalid Email or password" });
    //     }
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
  }
});

router.post("/signinclient", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "please fill all fields" });
  } else {
    db.query(
      "SELECT email FROM client WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          if (result.length <= 0) {
            return res
              .status(422)
              .json({ error: "Invalid username or password" });
          } else {
            db.query(
              "SELECT * FROM client WHERE email = ?",
              [email],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(result[0].password);
                  bcrypt
                    .compare(password, result[0].password)
                    .then((doMatch) => {
                      if (doMatch) {
                        const token = jwt.sign(
                          { idclient: result[0].idclient },
                          JWT_SECREAT_KEY
                        );
                        const { idclient, name, email } = result[0];
                        res
                          .status(200)
                          .json({ token, user: { idclient, name, email } });
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
    // Client.findOne({ email: email })
    // .then((savedUser) => {
    //     if(!savedUser)
    //     {
    //         return res.status(422).json({ error: "Invalid Username or Password" });
    //     }
    //     else{
    //         bcrypt.compare(password, savedUser.password)
    //         .then((doMatch) => {
    //             if(doMatch)
    //             {
    //                 // return res.status(200).json({ msg: "Login Successful !!" });
    //                 const token = jwt.sign({ _id: savedUser._id }, JWT_SECREAT_KEY);
    //                 const {_id, name, email} = savedUser;
    //                 res.json({token, user: {_id, name, email}});
    //             }
    //             else{
    //                 return res.status(422).json({ error: "Invalid Username or Password" });
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     }
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
  }
});

module.exports = router;

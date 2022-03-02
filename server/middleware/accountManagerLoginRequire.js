const jwt = require("jsonwebtoken");
const db = require("../database");
const { JWT_SECREAT_KEY } = require("../keys");

const accountManagerLoginRequire = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization)
    {
        return res.status(401).json({ error: "authorization failed !! please log in !" });
    }
    else{
        // authorization = Bearer (SECREAT KEY)
        const token = authorization.replace("Bearer ", "");

        jwt.verify(token, JWT_SECREAT_KEY, (err, payload) => {
            if(err)
            {
                return res.status(401).json({ error: "You must be logged in" })
            }
            else{
                // console.log(payload);
                const { idaccountmanager, iat } = payload;
                db.query("SELECT * FROM accountmanager WHERE idaccountmanager = ?", [idaccountmanager], (err, userdata) => {
                    if(err)
                    {
                        return console.log(err);
                    }
                    else{
                        req.user = userdata;
                        next();
                    }
                });
                // AccountManager.findById(_id)
                // .then((userdata) => {
                //     req.user = userdata;
                //     next();
                // })
                // .catch((err) => {
                //     console.log(err);
                // });
            }
        });
    }
};

module.exports = accountManagerLoginRequire;
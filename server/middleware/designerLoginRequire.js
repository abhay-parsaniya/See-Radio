const jwt = require("jsonwebtoken");
const db = require("../database");
const { JWT_SECREAT_KEY } = require("../keys");

const designerLoginRequire = (req, res, next) => {

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
                console.log(payload);
                const { iddesigner, iat } = payload;
                db.query("SELECT * FROM designer WHERE iddesigner = ?", [iddesigner], (err, userdata) => {
                    if(err)
                    {
                        return console.log(err);
                    }
                    else{
                        req.user = userdata;
                        next();
                    }
                });
            }
        });
    }
};

module.exports = designerLoginRequire;
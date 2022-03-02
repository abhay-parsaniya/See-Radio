const jwt = require("jsonwebtoken");
const { JWT_SECREAT_KEY } = require("../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const requireLogin = (req, res, next) => {

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
                const { _id } = payload;
                User.findById(_id)
                .then((userdata) => {
                    req.user = userdata;
                    next();
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        });
    }
};

module.exports = requireLogin;
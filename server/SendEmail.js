const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seeradio.system@gmail.com",
      pass: "msxNSDBAxndsdjw#^%*#854068",
    },
  });

  // console.log(transporter.options.auth.user);

module.exports = transporter;
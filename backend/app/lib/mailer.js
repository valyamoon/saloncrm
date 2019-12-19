var mongoose = require("mongoose");
async = require("async");
nodemailer = require("nodemailer");
smtpTransport = require("nodemailer-smtp-transport");
const config = require("../config/config").get(process.env.NODE_ENV || "local");

module.exports = {
  sendMail: sendMail
};

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: config.smtp.service,
    port: 465,
    secure: true,
    host: config.smtp.host,
    auth: {
      user: config.smtp.username,
      pass: config.smtp.password
    }
  })
);

function sendMail(to, userData) {
  async function sendMail() {
    var mailOptions = {
      from: "shahnaddy@gmail.com",
      to: to,
      subject: userData.subject,
      text: userData.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

  sendMail().then(function() {});
}

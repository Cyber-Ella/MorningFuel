const transporter = require("../config/mailer");

const sendEmail = (to, subject, text) => {
  return transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html: text,
  });
};
module.exports = sendEmail;

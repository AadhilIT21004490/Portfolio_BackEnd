const nodemailer = require("nodemailer");
require("dotenv").config();

const Mail = async (text,subject,mail,name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "portfomail@gmail.com",
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailOptions = {
    from: "portfomail@gmail.com", // sender address
    to: "aadhillinked@gmail.com", // list of receivers
    subject: `${subject}`, // Subject line
    // text: `EMAIL: ${mail} ${text} SEND THIS FROM ${mail} AND THE NAME IS ${name}`, // plain text bod y
    html: `<b>EMAIL:</b> ${mail} <br/><br/> <b>NAME:</b>${name}<br/><br/><b>MESSAGE:</b> ${text} <br/><br/> `
   
    // attachments: [
    //   {
    //     filename: "weatherReport.pdf",
    //     content: pdfData,
    //   },
    // ],
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email has been sent Successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  sendMail(transporter, mailOptions);
};

module.exports = { Mail };
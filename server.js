const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(300, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "rwilde585@gmail.com",
    pass: "**********",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `;
  var mail = {
    from: name,
    to: "rwilde585@gmail.com",
    subject: "Message from Portfolio Website",
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

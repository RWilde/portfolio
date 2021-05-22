const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SERVICE,
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
      refreshToken: process.env.NODEMAILER_REFRESH_TOKEN,
      accessToken: process.env.NODEMAILER_ACCESS_TOKEN,
    },
  });

  transporter.sendMail(
    {
      from: data.email,
      to: "rwilde585@gmail.com",
      subject: `New email from portfolio`,
      html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `,
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        });
      }
    }
  );
};

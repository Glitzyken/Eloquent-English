const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use({ ra, origin: '*' });
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('This server is running on port 3000');
});

app.post('/sendmail', (req, res) => {
  console.log('Request came in');
  let user = req.body;

  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: 'Failed to send email' });
    } else {
      console.log('Email has been send');
      res.send(info);
    }
  });
});

const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: '<sender email>',
      pass: '<password>'
    }
  });
};

const mailOptions = {
  from: `"<Sender’s name>", "<Sender’s email>"`,
  to: `<${user.email}>`,
  subject: '<Message subject>',
  html: '<h1>And here is the place for HTML</h1>'
};

transporter.sendMail(mailOptions, callback);

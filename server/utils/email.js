const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstname = user.firstName;
    this.url = url;
    this.from = `Milan Rawat <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      // Sendgrid
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      // secureConnection: false,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(subject) {
    const text = `Hello ${this.firstname}!  This is your signup confirmation link ${this.url} (Valid for 15 minutes only) Team Shopify`;
    // Defining email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text,
      // html:
    };

    // Creating a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("Welcome to the Shopify!");
  }
};

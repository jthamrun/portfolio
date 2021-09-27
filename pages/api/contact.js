export default async (req, res) => {
    require("dotenv").config();

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "testjon719@gmail.com",
            pass: process.env.EMAIL_PASS,
        },
        secure: true,
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const mailData = {
        from: "testjon719@gmail.com",
        to: "jonathan.thamrun@gmail.com",
        subject: `Message From ${req.body.name} - ${req.body.subject}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    res.status(200).json({ status: "OK" });

    // transporter.sendMail(mailData, function (err, info) {
    //     if (err) console.log(err);
    //     else console.log(info);
    // });
    // res.send("success");
}

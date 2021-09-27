import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.EMAIL_API_KEY);

async function sendEmail(req, res) {
  const { email, subject, message, name } = req.body
  const msg = {
    to: "jonathan.thamrun@gmail.com",
    from: "testjon719@gmail.com",
    subject: `${subject}`,
    html: `<div>${name} | ${email}- ${message}`,
  };

  try {
    await sendgrid.send(msg);
    res.status(200).json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}

export default sendEmail;

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-password', // replace with your password or app password
  },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    
    if (!to || !subject) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    console.log('Sending email to:', to);

    const mailOptions = {
      from: 'your-email@gmail.com', // replace with your email
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully');
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});

export default app;

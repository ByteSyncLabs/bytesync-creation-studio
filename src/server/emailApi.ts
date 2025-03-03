
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import type { Request, Response } from 'express';

// Create an Express router instead of an app
const emailRouter = express.Router();

// Use body parser middleware
emailRouter.use(bodyParser.json());

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-password', // replace with your password or app password
  },
});

// Email sending endpoint
emailRouter.post('/send-email', (req: Request, res: Response) => {
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

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ 
          success: false, 
          message: 'Failed to send email', 
          error: error instanceof Error ? error.message : String(error) 
        });
      }
      
      console.log('Email sent successfully:', info.response);
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error in request processing:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process request', 
      error: error instanceof Error ? error.message : String(error) 
    });
  }
});

export default emailRouter;


import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Get environment variables for email configuration
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  const emailFrom = process.env.EMAIL_FROM || 'bytesynclabs@gmail.com';

  if (!emailUser || !emailPass) {
    console.error('Email configuration missing');
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email to ByteSync team about new contact
    await transporter.sendMail({
      from: emailFrom,
      to: emailFrom,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Welcome email to customer
    await transporter.sendMail({
      from: emailFrom,
      to: email,
      subject: 'Welcome to ByteSync Labs!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316;">ByteSync Labs</h1>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2>Hello ${name},</h2>
            <p>Thank you for reaching out to ByteSync Labs! We've received your message and one of our team members will get back to you shortly.</p>
            
            <p>We're excited about the possibility of working with you to create innovative web solutions that meet your unique needs.</p>
          </div>
          
          <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website for more information about our services and past projects.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="margin-bottom: 5px;"><strong>ByteSync Labs</strong></p>
            <p style="margin-bottom: 5px; color: #666;">Pune, India</p>
            <p style="margin-bottom: 5px; color: #666;">bytesynclabs@gmail.com</p>
            <p style="margin-bottom: 5px; color: #666;">7720025579</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Messages sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}

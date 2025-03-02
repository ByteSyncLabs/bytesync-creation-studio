
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message: string;
  success?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log email configuration for debugging
    console.log('Email Configuration:', {
      service: process.env.EMAIL_SERVICE,
      user: process.env.EMAIL_USER ? '✓ Present' : '✗ Missing',
      pass: process.env.EMAIL_PASS ? '✓ Present' : '✗ Missing',
      from: process.env.EMAIL_FROM,
    });

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    await transporter.verify().catch((error) => {
      console.error('Transporter verification failed:', error);
      throw new Error(`Email service connection failed: ${error.message}`);
    });

    // Send confirmation email to user
    const userMailResult = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to ByteSync Labs!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #ff5722;">Welcome to ByteSync Labs!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your inquiry:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff5722; margin: 15px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p>We typically respond to inquiries within 24-48 business hours. In the meantime, feel free to explore our services on our website.</p>
          <p>Best Regards,</p>
          <p>The ByteSync Labs Team</p>
        </div>
      `,
    }).catch((error) => {
      console.error('User email sending failed:', error);
      throw new Error(`Failed to send confirmation email: ${error.message}`);
    });

    console.log('User email sent successfully:', userMailResult.messageId);

    // Forward the message to ByteSync team
    const teamMailResult = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #ff5722;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    }).catch((error) => {
      console.error('Team email sending failed:', error);
      throw new Error(`Failed to forward message to team: ${error.message}`);
    });

    console.log('Team email sent successfully:', teamMailResult.messageId);

    return res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message,
      success: false
    });
  }
}

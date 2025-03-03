
import nodemailer from 'nodemailer';

// Create reusable transporter with dummy credentials
// In a real application, these would be stored securely
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.dummy.email@gmail.com', // replace with your actual email for testing
    pass: 'your-dummy-password', // replace with your actual password for testing
  },
});

export interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const mailOptions = {
      from: 'ByteSync Labs <your.dummy.email@gmail.com>',
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendContactConfirmation = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> => {
  const emailData: EmailData = {
    to: email,
    subject: `Thank you for contacting ByteSync Labs - ${subject}`,
    text: `
      Dear ${name},

      Thank you for reaching out to ByteSync Labs. We have received your message and will get back to you soon.

      Your message:
      ${message}

      Best regards,
      ByteSync Labs Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b00;">Thank You for Contacting ByteSync Labs</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to ByteSync Labs. We have received your message and will get back to you soon.</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #ff6b00; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Message:</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p>${message}</p>
        </div>
        
        <p>Best regards,<br/>ByteSync Labs Team</p>
      </div>
    `,
  };

  return sendEmail(emailData);
};

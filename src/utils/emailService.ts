
// This file now calls a real API endpoint for sending emails

export interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Function to send an email through our API endpoint
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Sending email to:', emailData.to);
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to send email: ${errorData.message || response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Email sent successfully:', result);
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


import { sendContactConfirmation } from "@/utils/emailService";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    console.log("Processing contact form data:", data);
    
    // Send confirmation email to the user
    const emailSent = await sendContactConfirmation(
      data.name,
      data.email,
      data.subject,
      data.message
    );
    
    return emailSent;
  } catch (error) {
    console.error("Error in contact form submission:", error);
    throw error;
  }
};

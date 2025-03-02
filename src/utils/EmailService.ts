
/**
 * Service for handling email operations
 */
export const EmailService = {
  /**
   * Send the contact form data to the API
   */
  sendContactForm: async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      console.log('Sending contact form data:', formData);
      
      // For Vite development, we need to construct the correct API URL
      const baseUrl = import.meta.env.DEV 
        ? 'http://localhost:3000' // Assuming your Next.js API runs on port 3000
        : '';
      
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log('Response from contact API:', data);
      
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong');
      }
      
      return data;
    } catch (error) {
      console.error('Error in EmailService:', error);
      throw error;
    }
  }
};

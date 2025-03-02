
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
      
      const response = await fetch('/api/contact', {
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

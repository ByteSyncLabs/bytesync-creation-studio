
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { EmailService } from "@/utils/EmailService";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      console.log("Submitting contact form:", formData);
      const result = await EmailService.sendContactForm(formData);
      console.log("Form submission result:", result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We've sent you a welcome email!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-8 space-y-6">
      <h4 className="text-xl font-semibold mb-6">Send us a Message</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bytesync-orange/50"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bytesync-orange/50"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
        <input 
          type="text" 
          id="subject" 
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bytesync-orange/50"
          placeholder="Subject"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message" 
          rows={5} 
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bytesync-orange/50"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-bytesync-orange hover:bg-bytesync-orange/90 text-white transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Processing <CheckCircle className="ml-2 h-4 w-4 animate-pulse" /></>
        ) : (
          <>Send Message <Send className="ml-2 h-4 w-4" /></>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;


import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { sendContactConfirmation } from "@/utils/emailService";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, simulate saving the contact message to a database
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log("Form data being processed:", formData);
      
      // Send confirmation email to the user who submitted the form
      const emailSent = await sendContactConfirmation(
        formData.name,
        formData.email,
        formData.subject,
        formData.message
      );
      
      if (emailSent) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We've sent a confirmation to your email!",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        // Email couldn't be sent but form was processed
        toast({
          title: "Message Received!",
          description: "Your message was received, but we couldn't send a confirmation email. We'll still contact you soon!",
          duration: 5000,
        });
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-bytesync-orange/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-bytesync-orange font-semibold tracking-wide animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            CONTACT US
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Let's Bring Your Vision to Life!
          </h3>
          <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Partner with ByteSync Labs and experience the perfect blend of creativity, technology, and functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="glass-panel rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-5 w-5 text-bytesync-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">bytesynclabs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="h-5 w-5 text-bytesync-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">7720025579</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-bytesync-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-4">Our Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

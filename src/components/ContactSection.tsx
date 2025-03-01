
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
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
                  className="w-full px-4 py-2 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bytesync-orange/50"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-bytesync-orange hover:bg-bytesync-orange/90 text-white transition-all">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

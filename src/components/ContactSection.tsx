
import React, { useEffect, useRef } from "react";
import ContactHeader from "./contact/ContactHeader";
import ContactInformation from "./contact/ContactInformation";
import BusinessHours from "./contact/BusinessHours";
import ContactForm from "./contact/ContactForm";

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

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-bytesync-orange/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ContactHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <ContactInformation />
            <BusinessHours />
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

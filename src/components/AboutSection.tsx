
import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const AboutSection: React.FC = () => {
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

  const features = [
    "Tailored Solutions",
    "Expert Team",
    "End-to-End Support",
    "Cutting-Edge Technology",
    "Custom Web Development",
    "UI/UX Design Excellence"
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-bytesync-orange/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="relative z-10">
              <div className="glass-panel rounded-2xl p-3 shadow-lg">
                <img
                  src="/lovable-uploads/27a9bfa3-0e8e-4de9-ba62-ebf4ad190b1a.png"
                  alt="About ByteSync Labs"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-bytesync-orange/30 rounded-full z-0 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bytesync-blue/20 rounded-full z-0 blur-xl"></div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <h2 className="text-bytesync-orange font-semibold tracking-wide">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Your Trusted IT Solution Partner</h3>
            </div>
            
            <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              At ByteSync Labs, we specialize in crafting custom websites from scratch, 
              tailored to meet your unique business needs. Our team of experienced developers 
              and designers is dedicated to delivering high-quality, user-friendly, and 
              responsive websites that leave a lasting impression.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-bytesync-orange/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-bytesync-orange" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

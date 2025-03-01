
import React, { useEffect, useRef } from "react";
import { Globe, Palette, Settings, Code, RefreshCw, LayoutGrid } from "lucide-react";

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-bytesync-orange" />,
      title: "Custom Website Development",
      description: "From concept to launch, we build bespoke websites that reflect your brand identity and cater to your specific requirements."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-bytesync-orange" />,
      title: "Website Maintenance & Support",
      description: "We ensure your website runs smoothly with regular updates, security checks, and performance optimizations."
    },
    {
      icon: <Palette className="h-10 w-10 text-bytesync-orange" />,
      title: "UI/UX Design",
      description: "Our creative designers create intuitive and visually appealing user interfaces that enhance user experience."
    },
    {
      icon: <Code className="h-10 w-10 text-bytesync-orange" />,
      title: "Enterprise Web Applications",
      description: "We develop robust and scalable enterprise applications tailored to streamline your business operations."
    },
    {
      icon: <Settings className="h-10 w-10 text-bytesync-orange" />,
      title: "Website Customization",
      description: "Whether you need new features, design adjustments, or complete revamps, we provide flexible customization options."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-bytesync-orange" />,
      title: "Digital Transformation",
      description: "We help businesses embrace digital technologies to fundamentally transform how they operate and deliver value to customers."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden bg-secondary/50">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-bytesync-orange/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-bytesync-orange font-semibold tracking-wide animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Web Solutions That Drive Results
          </h3>
          <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            We offer a comprehensive range of web development services 
            tailored to meet the unique needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-6 p-3 w-16 h-16 flex items-center justify-center rounded-xl bg-bytesync-orange/10">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React, { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      quote: "Working with ByteSync Labs was a game-changer for our business. They delivered a stunning website that exceeded our expectations. Their attention to detail and customer support is unmatched.",
      author: "John Doe",
      role: "CEO of TechNova Solutions"
    },
    {
      quote: "ByteSync Labs transformed our outdated website into a modern, user-friendly platform. Our customers love the new look and feel. Highly recommend their services!",
      author: "Sarah Mitchell",
      role: "Founder of Urban Trends"
    },
    {
      quote: "Their team is highly professional and responsive. They understood our requirements and delivered a custom enterprise application that streamlined our workflow. Fantastic experience!",
      author: "David Lee",
      role: "Operations Manager at GreenCorp"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-bytesync-blue/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-bytesync-orange font-semibold tracking-wide animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            What Our Clients Say
          </h3>
          <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Don't just take our word for it. Here's what our clients have to say about working with ByteSync Labs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-8 relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-bytesync-orange/20" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-bytesync-orange fill-bytesync-orange" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

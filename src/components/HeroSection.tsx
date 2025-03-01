
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
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
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Animated circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-bytesync-orange/10 rounded-full filter blur-3xl animate-spin-slow opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bytesync-blue/10 rounded-full filter blur-3xl animate-spin-slow opacity-60"></div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-bytesync-orange/10 text-bytesync-orange border border-bytesync-orange/20 text-xs sm:text-sm font-medium inline-block text-center sm:text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                Driving Business Growth Through Digital Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              Custom <span className="text-gradient">Web Solutions</span> For Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              At ByteSync Labs, we craft tailored web experiences that transform your digital presence. 
              From stunning websites to powerful applications, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <Button size="lg" className="bg-bytesync-orange hover:bg-bytesync-orange/90 text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <div className="relative z-10 animate-float glass-panel rounded-2xl p-2 shadow-lg">
              <img
                src="/lovable-uploads/cf61778a-7986-4056-8389-4d26b1a3ebb8.png"
                alt="ByteSync Labs"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bytesync-orange rounded-full z-0 animate-pulse opacity-40 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-bytesync-blue rounded-full z-0 animate-pulse opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

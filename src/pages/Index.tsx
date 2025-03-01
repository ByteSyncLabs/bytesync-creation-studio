
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  // Add a subtle background grid pattern effect via CSS
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--grid-pattern",
      `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`
    );
    document.documentElement.style.backgroundImage = "var(--grid-pattern)";
    document.documentElement.style.backgroundSize = "20px 20px";

    return () => {
      document.documentElement.style.backgroundImage = "";
      document.documentElement.style.backgroundSize = "";
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <StatsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

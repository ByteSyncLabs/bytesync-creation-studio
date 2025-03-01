
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { ThemeProvider } from "@/components/ThemeProvider";

const Services = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Services;

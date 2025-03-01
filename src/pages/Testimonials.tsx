
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ThemeProvider } from "@/components/ThemeProvider";

const Testimonials = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Testimonials;

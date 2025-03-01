
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { ThemeProvider } from "@/components/ThemeProvider";

const About = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;

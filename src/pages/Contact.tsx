
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { ThemeProvider } from "@/components/ThemeProvider";

const Contact = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Contact;

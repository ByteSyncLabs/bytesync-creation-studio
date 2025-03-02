
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "sonner";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Toaster position="top-right" />
      <NavBar />
      <main className="flex-grow pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

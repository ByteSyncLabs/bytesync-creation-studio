
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - ByteSync Labs</title>
        <meta name="description" content="Contact ByteSync Labs for your web development needs" />
      </Head>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

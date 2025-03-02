
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials - ByteSync Labs</title>
        <meta name="description" content="Client testimonials for ByteSync Labs" />
      </Head>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;

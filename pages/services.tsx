
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - ByteSync Labs</title>
        <meta name="description" content="Our services at ByteSync Labs" />
      </Head>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;

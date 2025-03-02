
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - ByteSync Labs</title>
        <meta name="description" content="Learn more about ByteSync Labs" />
      </Head>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;

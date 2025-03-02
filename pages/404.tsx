
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="container mx-auto text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl mb-8">Page Not Found</h2>
            <p className="mb-8 text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
            <Link href="/" passHref>
              <Button size="lg">
                <Home className="mr-2 h-5 w-5" /> Go Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;

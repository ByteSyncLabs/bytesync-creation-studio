
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ByteSyncLogo from "@/components/ByteSyncLogo";
import { Home } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-bytesync-orange/10 rounded-full filter blur-3xl animate-spin-slow opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bytesync-blue/10 rounded-full filter blur-3xl animate-spin-slow opacity-60"></div>
        
        <div className="text-center z-10 glass-panel p-10 rounded-2xl max-w-lg mx-auto animate-fade-in">
          <ByteSyncLogo className="mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-bytesync-orange text-white hover:bg-bytesync-orange/90"
          >
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;

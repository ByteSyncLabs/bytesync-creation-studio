
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import ByteSyncLogo from "./ByteSyncLogo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Testimonials", href: "/testimonials" },
    { text: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.includes(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {theme === 'dark' ? (
            <div className="flex items-center">
              <span className="text-bytesync-orange text-3xl font-bold">B</span>
              <span className="text-foreground text-2xl ml-1">yte<span className="text-bytesync-blue">Sync</span></span>
            </div>
          ) : (
            <ByteSyncLogo animated={!isScrolled} />
          )}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`text-foreground hover:text-bytesync-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-bytesync-orange ${
                isActive(link.href) 
                ? 'text-bytesync-orange after:scale-x-100' 
                : 'after:scale-x-0 hover:after:scale-x-100'
              } after:transition-transform after:origin-right hover:after:origin-left`}
            >
              {link.text}
            </Link>
          ))}
          <ThemeToggle />
          <Button className="bg-bytesync-orange text-white hover:bg-bytesync-orange/90 transition-all">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`text-foreground hover:text-bytesync-orange transition-colors py-2 ${
                    isActive(link.href) ? 'text-bytesync-orange' : ''
                  }`}
                >
                  {link.text}
                </Link>
              ))}
              <Button className="bg-bytesync-orange text-white hover:bg-bytesync-orange/90 transition-all w-full">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

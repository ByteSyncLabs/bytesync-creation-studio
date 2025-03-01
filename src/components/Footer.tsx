
import React from "react";
import ByteSyncLogo from "./ByteSyncLogo";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-secondary/50 pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <ByteSyncLogo animated={false} />
            <p className="text-muted-foreground">
              Your trusted IT solution partner, driving business growth through digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-bytesync-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Custom Website Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Website Maintenance</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Enterprise Web Applications</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-bytesync-orange transition-colors">Website Customization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-bytesync-orange mr-2">Email:</span>
                <span className="text-muted-foreground">bytesynclabs@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-bytesync-orange mr-2">Phone:</span>
                <span className="text-muted-foreground">7720025579</span>
              </li>
              <li className="flex items-start">
                <span className="text-bytesync-orange mr-2">Address:</span>
                <span className="text-muted-foreground">Pune, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-bytesync-orange mr-2">Website:</span>
                <a href="http://www.bytesynclabs.co" className="text-muted-foreground hover:text-bytesync-orange transition-colors">www.bytesynclabs.co</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ByteSync Labs. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-bytesync-orange text-white p-2 rounded-full hover:bg-bytesync-orange/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

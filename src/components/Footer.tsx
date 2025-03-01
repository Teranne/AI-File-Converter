
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-primary/10">
          <div className="lg:col-span-2">
            <div className="font-display text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              AI File Converter
            </div>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              State-of-the-art AI-powered platform for seamless file conversions across various formats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {currentYear} AI File Converter. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

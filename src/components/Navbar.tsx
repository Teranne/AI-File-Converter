
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                AI File Converter
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Benefits
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#benefits" 
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#pricing" 
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                </Button>
                <Button className="w-full justify-center" asChild>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

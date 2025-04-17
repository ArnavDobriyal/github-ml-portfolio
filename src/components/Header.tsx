
import { useState, useEffect } from "react";
import { Code, Github, Layout, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-github-darker shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="text-github-accent mr-2" size={24} />
          <span className="font-mono font-bold text-xl">ML.Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button 
              size="sm" 
              className="bg-github-accent hover:bg-github-accent/80 text-white"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-github-text focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-github-darker border-t border-github-border animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#certifications" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                size="sm" 
                className="bg-github-accent hover:bg-github-accent/80 text-white w-full"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

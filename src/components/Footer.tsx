
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-github-darker border-t border-github-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code className="text-github-accent mr-2" size={24} />
            <span className="font-mono font-bold text-xl">ML.Portfolio</span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            <a 
              href="#" 
              className="hover:text-github-accent transition-colors mb-4 md:mb-0"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-github-accent transition-colors mb-4 md:mb-0"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-github-accent transition-colors mb-4 md:mb-0"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="hover:text-github-accent transition-colors mb-4 md:mb-0"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-github-border pt-8 text-center text-github-muted">
          <p>© {new Date().getFullYear()} ML.Portfolio. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, Tailwind CSS, and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

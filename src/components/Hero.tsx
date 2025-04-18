
import { ArrowDownCircle, Award, BrainCircuit, Database, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const spaceshipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spaceship = spaceshipRef.current;
    if (spaceship) {
      // Animate the spaceship to fly in from the left
      spaceship.style.transform = "translateX(-100px) rotate(25deg)";
      spaceship.style.opacity = "0";
      
      setTimeout(() => {
        spaceship.style.transition = "transform 2.5s ease-out, opacity 1.5s ease-in";
        spaceship.style.transform = "translateX(0) rotate(0deg)";
        spaceship.style.opacity = "1";
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements with Continuous Animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-6xl slide-continuous">&#123;</div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl wave-animation">&#125;</div>
        <div className="absolute top-1/2 right-1/6 text-6xl fade-continuous">( )</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl slide-continuous">&lt;/&gt;</div>
        <div className="absolute top-1/3 right-1/3 text-5xl wave-animation">[AI]</div>
        <div className="absolute top-2/3 left-1/4 text-4xl slide-continuous">[ML]</div>
        <div className="absolute bottom-1/5 right-1/5 text-4xl fade-continuous">#</div>
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        <div ref={spaceshipRef} className="mb-8 flex items-center justify-center text-github-accent">
          <div className="relative">
            <Rocket className="h-16 w-16 text-github-accent animate-pulse" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="h-8 w-3 bg-gradient-to-t from-github-accent to-transparent opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="mb-6 flex items-center text-github-accent animate-fade-in">
          <BrainCircuit className="mr-2" size={28} />
          <span className="font-mono font-medium">Machine Learning Engineer</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="font-mono text-github-text">AI</span> 
          <span className="text-github-accent">.</span>
          <span className="font-mono text-github-text">Engineer</span>
        </h1>
        
        <p className="text-github-muted text-lg md:text-xl max-w-3xl mb-8 animate-fade-in">
          AWS and Google Certified Professional with 9+ months of internship experience in AI/ML.
          Expertise in developing Generative AI applications, predictive models, and dynamic dashboards.
          Proven track record in enhancing system performance and user satisfaction through data-driven solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          <Button className="bg-github-accent hover:bg-github-accent/80 text-github-dark">
            <Github className="mr-2" size={18} />
            View GitHub
          </Button>
          <a href="#experience">
            <Button variant="outline" className="border-github-border text-github-text hover:bg-github-accent/10">
              <Award className="mr-2" size={18} />
              View Experience
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="border-github-border text-github-text hover:bg-github-accent/10">
              <Database className="mr-2" size={18} />
              ML Projects
            </Button>
          </a>
        </div>
        
        <div className="animate-bounce mt-12">
          <a href="#about" className="text-github-muted hover:text-github-accent transition-colors">
            <ArrowDownCircle size={36} />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

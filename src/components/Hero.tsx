
import { ArrowDownCircle, Award, BrainCircuit, Database, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-6xl">&#123;</div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl">&#125;</div>
        <div className="absolute top-1/2 right-1/6 text-6xl">( )</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl">&lt;/&gt;</div>
        <div className="absolute top-1/3 right-1/3 text-5xl">[AI]</div>
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
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
          <Button className="bg-github-accent hover:bg-github-accent/80 text-white">
            <Github className="mr-2" size={18} />
            View GitHub
          </Button>
          <a href="#experience">
            <Button variant="outline" className="border-github-border text-github-text hover:bg-card">
              <Award className="mr-2" size={18} />
              View Experience
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="border-github-border text-github-text hover:bg-card">
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

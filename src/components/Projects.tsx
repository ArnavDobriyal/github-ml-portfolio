
import { Bot, BarChartBig, Mic, Calendar, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ 
  title, 
  date, 
  description, 
  achievements, 
  technologies, 
  icon: Icon,
  demoUrl,
  repoUrl
}) => (
  <div className="card-github hover-effect">
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-full bg-github-muted/10 mr-4">
        <Icon size={24} className="text-github-accent" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-github-text">{title}</h3>
        <div className="flex items-center text-github-muted">
          <Calendar size={14} className="mr-1" />
          <span className="text-sm font-mono">{date}</span>
        </div>
      </div>
    </div>

    <p className="text-github-text mb-4">{description}</p>

    <div className="space-y-2 mb-6">
      {achievements.map((achievement, index) => (
        <p key={index} className="text-github-text text-sm">• {achievement}</p>
      ))}
    </div>

    <div className="mb-6 flex flex-wrap">
      {technologies.map((tech, index) => (
        <span key={index} className="tag">{tech}</span>
      ))}
    </div>

    <div className="flex flex-wrap gap-3">
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="border-github-border hover:bg-card">
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </Button>
        </a>
      )}
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="border-github-border hover:bg-card">
            <Github size={16} className="mr-2" />
            Repository
          </Button>
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI To-Do List System",
      date: "Jun 2024 – Sept 2024",
      description: "An intelligent task automation system using agentic AI principles",
      achievements: [
        "Developed an AI-based task automation system with n8n, boosting task planning efficiency by 30%.",
        "Integrated a Telegram bot for real-time updates, ensuring a 93% uptime and smoother workflow management."
      ],
      technologies: ["n8n", "Agentic AI", "Telegram API", "Task Automation", "Python"],
      icon: Bot,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "DAP Prices Dashboard",
      date: "Jul 2024 – Oct 2024",
      description: "Interactive dashboard to visualize and forecast DAP fertilizer prices",
      achievements: [
        "Created a dynamic dashboard using Streamlit to forecast DAP prices, cutting decision-making time by 22%.",
        "Leveraged ML models to achieve an 83% forecasting accuracy, improving operational planning."
      ],
      technologies: ["Streamlit", "XGBoost", "LightGBM", "Time Series", "Python"],
      icon: BarChartBig,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Voice-Controlled AI Assistant",
      date: "Jun 2024 – Sept 2024",
      description: "An intelligent voice assistant with context-aware responses",
      achievements: [
        "Implemented an AI assistant with Google Speech-to-Text, achieving 89% speech recognition accuracy.",
        "Integrated context-aware AI features, reducing response errors by 18% and enhancing user satisfaction."
      ],
      technologies: ["Google Speech-to-Text", "NLP", "Context-awareness", "Python"],
      icon: Mic,
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">ML Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="animate-fade-in" 
            style={{animationDelay: `${0.1 * (index + 1)}s`}}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

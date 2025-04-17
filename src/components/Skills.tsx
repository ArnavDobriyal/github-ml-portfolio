import { useState } from "react";
import { Code, Database, Cloud, Server, Terminal, Paintbrush } from "lucide-react";
const SkillCategory = ({
  title,
  icon: Icon,
  skills,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-sm px-[10px] py-[10px] mx-[10px] my-[10px]">
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-full mr-4 transition-colors duration-300 ${isHovered ? "bg-github-accent/20" : "bg-github-muted/10"}`}>
          <Icon size={24} className={`transition-colors duration-300 ${isHovered ? "text-github-accent" : "text-github-muted"}`} />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map(skill => <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-github-text">{skill.name}</span>
              <span className="text-github-muted text-sm">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{
            width: `${skill.level}%`,
            backgroundColor: isHovered ? "hsl(var(--accent))" : "hsl(var(--primary))"
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
};
const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    icon: Code,
    skills: [{
      name: "Python",
      level: 90
    }, {
      name: "C/C++",
      level: 75
    }, {
      name: "SQL",
      level: 80
    }, {
      name: "JavaScript",
      level: 65
    }, {
      name: "HTML/CSS",
      level: 70
    }]
  }, {
    title: "ML Frameworks & Libraries",
    icon: Database,
    skills: [{
      name: "scikit-learn",
      level: 85
    }, {
      name: "TensorFlow",
      level: 80
    }, {
      name: "OpenCV",
      level: 75
    }, {
      name: "Pandas",
      level: 90
    }, {
      name: "NumPy",
      level: 90
    }]
  }, {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [{
      name: "AWS",
      level: 75
    }, {
      name: "Google Cloud",
      level: 70
    }, {
      name: "Docker",
      level: 65
    }, {
      name: "Kubernetes",
      level: 50
    }]
  }, {
    title: "Backend Frameworks",
    icon: Server,
    skills: [{
      name: "Flask",
      level: 80
    }, {
      name: "FastAPI",
      level: 75
    }, {
      name: "n8n",
      level: 85
    }, {
      name: "Ollama",
      level: 70
    }]
  }, {
    title: "Development Tools",
    icon: Terminal,
    skills: [{
      name: "Git",
      level: 85
    }, {
      name: "Docker",
      level: 70
    }, {
      name: "VS Code",
      level: 90
    }, {
      name: "Jupyter",
      level: 95
    }]
  }, {
    title: "Visualization",
    icon: Paintbrush,
    skills: [{
      name: "Matplotlib",
      level: 85
    }, {
      name: "Seaborn",
      level: 80
    }, {
      name: "Plotly",
      level: 75
    }, {
      name: "Streamlit",
      level: 85
    }, {
      name: "PowerBI",
      level: 70
    }]
  }];
  return <section id="skills" className="section-container border-y border-github-border bg-zinc-950">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skillCategories.map((category, index) => <div key={category.title} style={{
        animationDelay: `${0.1 * (index + 1)}s`
      }} className="animate-fade-in bg-zinc-950">
            <SkillCategory {...category} />
          </div>)}
      </div>
    </section>;
};
export default Skills;
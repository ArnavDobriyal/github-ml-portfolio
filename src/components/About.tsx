
import { Award, BookOpen, Calendar, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-github md:col-span-2 animate-fade-in">
          <div className="mb-6 code-block">
            <pre><code>{`const profile = {
  name: "Machine Learning Engineer",
  focus: ["AI Applications", "Predictive Models", "Data Science"],
  passion: "Developing intelligent solutions to real-world problems"
};`}</code></pre>
          </div>
          
          <p className="mb-4 text-github-text">
            I'm an AI/ML professional focused on building intelligent solutions that make a real-world impact.
            With certifications from leading cloud providers and hands-on experience in various internships,
            I've developed a wide array of skills in the ML ecosystem.
          </p>
          
          <p className="text-github-text">
            My approach combines theoretical knowledge with practical implementation,
            always striving to build systems that are both technically robust and user-friendly.
            I'm particularly interested in generative AI applications and predictive modeling.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="card-github animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div className="flex items-start">
              <BookOpen className="mr-4 text-github-accent" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <p className="text-github-muted">B.Tech in AI</p>
                <p className="text-github-text">Graphic Era Deemed University</p>
                <p className="text-github-accent font-mono">GPA: 8.8/10</p>
                <div className="mt-2 flex items-center">
                  <Calendar size={16} className="text-github-muted mr-2" />
                  <span className="text-sm text-github-muted">2021 - 2025</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-github animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex items-start">
              <Code className="mr-4 text-github-accent" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">Technical Expertise</h3>
                <p className="text-github-text">
                  Specializing in machine learning model development, 
                  data analysis, and building AI applications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card-github animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex items-start">
              <Award className="mr-4 text-github-accent" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">Certifications</h3>
                <ul className="space-y-2 text-github-text">
                  <li>TensorFlow Developer Certification</li>
                  <li>Professional Machine Learning Engineer</li>
                  <li>AWS Cloud Practitioner</li>
                  <li>Google Cloud Digital Leader</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

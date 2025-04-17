import { Calendar, MapPin } from "lucide-react";
const Experience = () => {
  return <section id="experience" className="section-container border-y border-github-border bg-zinc-950">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="mt-12">
        <div className="timeline-item animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <div className="timeline-date flex items-center">
            <Calendar size={14} className="mr-2" />
            Jan 2024 – Apr 2024
          </div>
          <h3 className="timeline-title text-github-accent">Data Science Intern</h3>
          <h4 className="timeline-subtitle flex items-center">
            <span>Lumiq.ai</span>
            <span className="mx-2">•</span>
            <MapPin size={14} className="mr-1" />
            <span>Location</span>
          </h4>
          <div className="space-y-2 text-github-text">
            <p>• Developed predictive ML models for healthcare claims, improving approval accuracy by 12%.</p>
            <p>• Built an interactive dashboard that reduced response times by 28% and increased user engagement by 15%.</p>
            <p>• Enhanced model efficiency, achieving a 91% classification accuracy after feature tuning.</p>
          </div>

          <div className="mt-4 flex flex-wrap">
            <span className="tag-language python">Python</span>
            <span className="tag">Healthcare</span>
            <span className="tag">ML Models</span>
            <span className="tag">Dashboard</span>
          </div>
        </div>

        <div className="timeline-item animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <div className="timeline-date flex items-center">
            <Calendar size={14} className="mr-2" />
            Jul 2024 – Oct 2024
          </div>
          <h3 className="timeline-title text-github-accent">ML Intern</h3>
          <h4 className="timeline-subtitle flex items-center">
            <span>Process Point Technologies</span>
            <span className="mx-2">•</span>
            <MapPin size={14} className="mr-1" />
            <span>Location</span>
          </h4>
          <div className="space-y-2 text-github-text">
            <p>• Created forecasting models for DAP fertilizer prices using XGBoost and LightGBM, reducing forecast error by 16%.</p>
            <p>• Compiled AI application insights for industry stakeholders, contributing to improved strategic planning.</p>
          </div>

          <div className="mt-4 flex flex-wrap">
            <span className="tag-language python">Python</span>
            <span className="tag">XGBoost</span>
            <span className="tag">LightGBM</span>
            <span className="tag">Forecasting</span>
          </div>
        </div>

        <div className="timeline-item animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <div className="timeline-date flex items-center">
            <Calendar size={14} className="mr-2" />
            May 2023 – Jun 2023
          </div>
          <h3 className="timeline-title text-github-accent">Data Science Intern</h3>
          <h4 className="timeline-subtitle flex items-center">
            <span>ATCS</span>
            <span className="mx-2">•</span>
            <MapPin size={14} className="mr-1" />
            <span>Location</span>
          </h4>
          <div className="space-y-2 text-github-text">
            <p>• Led a hotel pricing prediction project, achieving 94% accuracy to support revenue management decisions.</p>
            <p>• Optimized data pre-processing techniques, enhancing training efficiency by 38%.</p>
          </div>

          <div className="mt-4 flex flex-wrap">
            <span className="tag-language python">Python</span>
            <span className="tag">Price Prediction</span>
            <span className="tag">Data Preprocessing</span>
            <span className="tag">Revenue Management</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;
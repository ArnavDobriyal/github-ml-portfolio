
import React from "react";
import { Brain, TrendingUp, BarChart2, BrainCircuit } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

// Personal skill growth data over time
const skillGrowthData = [
  { name: "2021 Q1", "Deep Learning": 65, "NLP": 55, "Computer Vision": 60 },
  { name: "2021 Q2", "Deep Learning": 70, "NLP": 62, "Computer Vision": 65 },
  { name: "2021 Q3", "Deep Learning": 75, "NLP": 70, "Computer Vision": 72 },
  { name: "2021 Q4", "Deep Learning": 80, "NLP": 75, "Computer Vision": 78 },
  { name: "2022 Q1", "Deep Learning": 85, "NLP": 80, "Computer Vision": 82 },
  { name: "2022 Q2", "Deep Learning": 87, "NLP": 85, "Computer Vision": 85 },
  { name: "2022 Q3", "Deep Learning": 90, "NLP": 87, "Computer Vision": 88 },
  { name: "2022 Q4", "Deep Learning": 92, "NLP": 90, "Computer Vision": 90 },
];

// Project success metrics
const projectMetricsData = [
  { project: 1, accuracy: 0.88, f1Score: 0.85, recall: 0.82, precision: 0.87 },
  { project: 2, accuracy: 0.90, f1Score: 0.88, recall: 0.86, precision: 0.89 },
  { project: 3, accuracy: 0.92, f1Score: 0.90, recall: 0.88, precision: 0.91 },
  { project: 4, accuracy: 0.94, f1Score: 0.92, recall: 0.91, precision: 0.93 },
  { project: 5, accuracy: 0.95, f1Score: 0.94, recall: 0.93, precision: 0.95 },
];

// Personal ML skillset comparison
const skillsetData = [
  { skill: "Deep Learning", value: 92 },
  { skill: "NLP", value: 90 },
  { skill: "Computer Vision", value: 88 },
  { skill: "ML Engineering", value: 85 },
  { skill: "MLOps", value: 82 },
  { skill: "Data Science", value: 95 },
];

// Recent vs older projects performance
const projectComparisonData = [
  { skill: "Accuracy", Recent: 95, Previous: 85 },
  { skill: "Deployment Speed", Recent: 92, Previous: 75 },
  { skill: "Code Quality", Recent: 94, Previous: 80 },
  { skill: "Training Speed", Recent: 90, Previous: 70 },
  { skill: "Model Size", Recent: 88, Previous: 65 },
  { skill: "Inference Time", Recent: 91, Previous: 72 },
];

const NeuralNetworkVisualization = () => {
  return (
    <div className="bg-zinc-900 p-6 rounded-md border border-github-border h-[340px] relative overflow-hidden">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <BrainCircuit className="mr-2 text-github-accent" />
        My Neural Network Expertise
      </h3>

      <div className="flex justify-center items-center h-[220px] relative">
        {/* Input Layer */}
        <div className="neural-layer flex flex-col items-center absolute left-[5%]">
          <div className="text-xs text-github-muted mb-2">Domain Knowledge</div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={`input-${i}`} 
              className="w-4 h-4 rounded-full bg-blue-500 mb-3 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Hidden Layer 1 */}
        <div className="neural-layer flex flex-col items-center absolute left-[30%]">
          <div className="text-xs text-github-muted mb-2">Technical Skills</div>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={`h1-${i}`} 
              className="w-4 h-4 rounded-full bg-purple-500 mb-2 animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        {/* Hidden Layer 2 */}
        <div className="neural-layer flex flex-col items-center absolute left-[55%]">
          <div className="text-xs text-github-muted mb-2">ML Experience</div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={`h2-${i}`} 
              className="w-4 h-4 rounded-full bg-purple-500 mb-2 animate-pulse"
              style={{ animationDelay: `${i * 0.15 + 0.1}s` }}
            />
          ))}
        </div>

        {/* Output Layer */}
        <div className="neural-layer flex flex-col items-center absolute left-[80%]">
          <div className="text-xs text-github-muted mb-2">Career Impact</div>
          {[1, 2, 3].map((i) => (
            <div 
              key={`output-${i}`} 
              className="w-4 h-4 rounded-full bg-green-500 mb-3 animate-pulse"
              style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
            />
          ))}
        </div>

        {/* Connection lines with animation */}
        <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {/* Lines will be drawn by CSS */}
        </svg>
      </div>

      <div className="absolute bottom-2 left-6 right-6 text-xs text-github-muted text-center">
        Interactive visualization of how my skills and experience transform into impactful AI solutions
      </div>
    </div>
  );
};

const MetricsCard = ({ title, children, icon: Icon }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-md border border-github-border h-[340px]">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Icon className="mr-2 text-github-accent" />
        {title}
      </h3>
      {children}
    </div>
  );
};

const MLMetrics = () => {
  return (
    <section id="ml-metrics" className="section-container">
      <h2 className="section-title">ML Journey</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <MetricsCard title="Skill Growth Timeline" icon={TrendingUp}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={skillGrowthData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#8E9196" />
                <YAxis stroke="#8E9196" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    border: '1px solid #333',
                    borderRadius: '4px',
                    color: '#8E9196'
                  }} 
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Deep Learning"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="NLP"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Computer Vision"
                  stroke="#F97316"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </MetricsCard>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <MetricsCard title="Project Performance" icon={BarChart2}>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={projectMetricsData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorF1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorPrec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="project" stroke="#8E9196" />
                <YAxis stroke="#8E9196" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    border: '1px solid #333',
                    borderRadius: '4px',
                    color: '#8E9196'
                  }} 
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#9b87f5"
                  fillOpacity={1}
                  fill="url(#colorAcc)"
                />
                <Area
                  type="monotone"
                  dataKey="f1Score"
                  stroke="#0EA5E9"
                  fillOpacity={1}
                  fill="url(#colorF1)"
                />
                <Area
                  type="monotone"
                  dataKey="precision"
                  stroke="#F97316"
                  fillOpacity={1}
                  fill="url(#colorPrec)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </MetricsCard>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <MetricsCard title="Growth Comparison" icon={Brain}>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart outerRadius={90} width={730} height={250} data={projectComparisonData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="skill" stroke="#8E9196" />
                <PolarRadiusAxis stroke="#8E9196" />
                <Radar
                  name="Recent Projects"
                  dataKey="Recent"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Previous Projects"
                  dataKey="Previous"
                  stroke="#0EA5E9"
                  fill="#0EA5E9"
                  fillOpacity={0.5}
                />
                <Legend />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    border: '1px solid #333',
                    borderRadius: '4px',
                    color: '#8E9196'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </MetricsCard>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <NeuralNetworkVisualization />
        </div>
      </div>
    </section>
  );
};

export default MLMetrics;

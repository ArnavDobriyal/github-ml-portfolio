
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

const modelAccuracyData = [
  { name: "Week 1", LSTM: 76, CNN: 70, "RandomForest": 65 },
  { name: "Week 2", LSTM: 79, CNN: 75, "RandomForest": 68 },
  { name: "Week 3", LSTM: 82, CNN: 78, "RandomForest": 72 },
  { name: "Week 4", LSTM: 85, CNN: 81, "RandomForest": 74 },
  { name: "Week 5", LSTM: 87, CNN: 83, "RandomForest": 76 },
  { name: "Week 6", LSTM: 89, CNN: 86, "RandomForest": 78 },
  { name: "Week 7", LSTM: 91, CNN: 87, "RandomForest": 80 },
];

const trainingData = [
  { epoch: 1, loss: 0.9, accuracy: 0.45 },
  { epoch: 2, loss: 0.75, accuracy: 0.55 },
  { epoch: 3, loss: 0.6, accuracy: 0.65 },
  { epoch: 4, loss: 0.48, accuracy: 0.72 },
  { epoch: 5, loss: 0.37, accuracy: 0.78 },
  { epoch: 6, loss: 0.28, accuracy: 0.83 },
  { epoch: 7, loss: 0.21, accuracy: 0.87 },
  { epoch: 8, loss: 0.15, accuracy: 0.90 },
  { epoch: 9, loss: 0.11, accuracy: 0.92 },
  { epoch: 10, loss: 0.08, accuracy: 0.94 },
];

const radarData = [
  { skill: "Data Processing", Model_A: 80, Model_B: 90 },
  { skill: "Accuracy", Model_A: 95, Model_B: 85 },
  { skill: "Inference Speed", Model_A: 70, Model_B: 95 },
  { skill: "Memory Usage", Model_A: 65, Model_B: 75 },
  { skill: "Generalization", Model_A: 85, Model_B: 70 },
  { skill: "Robustness", Model_A: 75, Model_B: 80 },
];

const NeuralNetworkVisualization = () => {
  return (
    <div className="bg-zinc-900 p-6 rounded-md border border-github-border h-[340px] relative overflow-hidden">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <BrainCircuit className="mr-2 text-github-accent" />
        Neural Network Architecture
      </h3>

      <div className="flex justify-center items-center h-[220px] relative">
        {/* Input Layer */}
        <div className="neural-layer flex flex-col items-center absolute left-[5%]">
          <div className="text-xs text-github-muted mb-2">Input Layer</div>
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
          <div className="text-xs text-github-muted mb-2">Hidden Layer 1</div>
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
          <div className="text-xs text-github-muted mb-2">Hidden Layer 2</div>
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
          <div className="text-xs text-github-muted mb-2">Output Layer</div>
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
      <h2 className="section-title">ML Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <MetricsCard title="Model Accuracy Trends" icon={TrendingUp}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={modelAccuracyData}
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
                  dataKey="LSTM"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="CNN"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="RandomForest"
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
          <MetricsCard title="Training Metrics" icon={BarChart2}>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={trainingData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="epoch" stroke="#8E9196" />
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
                  dataKey="loss"
                  stroke="#F97316"
                  fillOpacity={1}
                  fill="url(#colorLoss)"
                />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#9b87f5"
                  fillOpacity={1}
                  fill="url(#colorAcc)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </MetricsCard>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <MetricsCard title="Model Comparison" icon={Brain}>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart outerRadius={90} width={730} height={250} data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="skill" stroke="#8E9196" />
                <PolarRadiusAxis stroke="#8E9196" />
                <Radar
                  name="Model A"
                  dataKey="Model_A"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Model B"
                  dataKey="Model_B"
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

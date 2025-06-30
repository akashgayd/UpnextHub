import { features } from '../../constants/features';

import {
  Award,
  BookOpen,
  Clock,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Briefcase,
  Lightbulb,
  Code,
  Database,
  Palette,
  BarChart3,
  DollarSign,
  Edit3,
  ShoppingCart,
  Target,
  Camera,
  Megaphone,
} from "lucide-react";

// Map of string names to actual components
const iconMap = {
  Award,
  BookOpen,
  Clock,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Briefcase,
  Lightbulb,
  Code,
  Database,
  Palette,
  BarChart3,
  DollarSign,
  Edit3,
  ShoppingCart,
  Target,
  Camera,
  Megaphone,
};

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose UpnextHub?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We're not just another internship platform. Our unique approach combines real-world experience with structured learning to fast-track your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-3d"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.desc}</p>
                  <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {feature.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

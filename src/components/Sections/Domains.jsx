import {
  Code,
  Database,
  Palette,
  TrendingUp,
  Users,
  BarChart3,
  DollarSign,
  Edit3,
  ShoppingCart,
  Target,
  Camera,
  Megaphone,
} from "lucide-react";
import { domains } from "../../constants/domains";

// Map string names to actual components
const iconMap = {
  Code,
  Database,
  Palette,
  TrendingUp,
  Users,
  BarChart3,
  DollarSign,
  Edit3,
  ShoppingCart,
  Target,
  Camera,
  Megaphone,
};

const Domains = () => {
  return (
    <section id="domains" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Explore Domains
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Choose from our wide range of internship domains tailored to match industry demands and your career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const IconComponent = iconMap[domain.icon];
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-3d group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${domain.color} rounded-2xl opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${domain.color} flex items-center justify-center text-white mr-4`}
                    >
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <div className="text-4xl">{domain.particles}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{domain.desc}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>
                      Demand:{" "}
                      <span className="font-semibold text-white">
                        {domain.demand}
                      </span>
                    </span>
                    <span>
                      Jobs:{" "}
                      <span className="font-semibold text-white">
                        {domain.jobs}
                      </span>
                    </span>
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

export default Domains;

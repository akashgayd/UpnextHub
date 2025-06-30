import { Sparkles, Rocket, ArrowRight, Play, ChevronRight } from 'lucide-react';
import { stats } from '../../constants/stats';
import {companies} from '../../constants/companies'

const Hero = ({ handleApply, isLoading }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 glow-effect">
            <Sparkles className="mr-2 text-yellow-400 animate-pulse" size={20} />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              #1 Internship Platform in India • 2500+ Success Stories
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Launch
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Your Career
              </span>
            </h1>
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-4">
                with Real-World
              </h2>
              <div className="inline-block relative">
                <span className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Internships!
                </span>
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🚀</div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Transform your potential into expertise with our premium internship programs across
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold"> 15+ domains </span>
            including Frontend, Backend, AI/ML, Marketing, HR, Sales, Finance, and more. 
            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent font-semibold"> Learn by doing, get certified, and land your dream job!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={handleApply}
              disabled={isLoading}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-2xl font-bold text-xl text-white overflow-hidden transform hover:scale-105 transition-all duration-300 glow-effect disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Processing Application...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                    Apply for Internship
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  </>
                )}
              </div>
            </button>
            
            <button className="group px-10 py-5 border-2 border-purple-500/50 rounded-2xl font-bold text-xl text-white hover:border-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center">
                <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                Watch Success Stories
                <Sparkles className="ml-3 group-hover:rotate-180 transition-transform duration-300" size={20} />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-16">
            <p className="text-gray-400 mb-8 text-lg">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {companies.slice(0, 6).map((company, index) => (
                <div key={index} className="flex items-center space-x-2 text-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{company.logo}</span>
                  <span className="text-gray-300 font-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
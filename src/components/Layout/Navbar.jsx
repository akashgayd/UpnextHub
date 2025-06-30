import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, ArrowRight, Rocket, Play, Sparkles } from 'lucide-react';

const Navbar = ({ isLoading, handleApply, setIsMenuOpen, isMenuOpen }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 ${scrollY > 10 ? 'bg-black/80 backdrop-blur-2xl border-b border-purple-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                UpnextHub
              </h1>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 mt-1"></div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Domains', 'Process', 'Success Stories', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={handleApply}
              disabled={isLoading}
              className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transform hover:scale-105 transition-all duration-300 glow-effect disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                'Apply Now'
              )}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-purple-500/20 slide-in">
          <div className="px-4 py-6 space-y-4">
            {['Home', 'About', 'Domains', 'Process', 'Success Stories', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={handleApply}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
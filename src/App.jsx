import { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Domains from './components/Sections/Domains';
import Process from './components/Sections/Process';
import Testimonials from './components/Sections/Testimonials';
import FAQ from './components/Sections/FAQ';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/UI/ScrollToTop';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApply = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Application form will open in a new tab!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20"></div>
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <Navbar 
        isLoading={isLoading} 
        handleApply={handleApply} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
      />
      
      <Hero handleApply={handleApply} isLoading={isLoading} />
      <About />
      <Domains />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes slideIn {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        .card-3d:hover {
          transform: rotateX(5deg) rotateY(5deg) scale(1.05);
        }
        .slide-in {
          animation: slideIn 0.8s ease-out;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
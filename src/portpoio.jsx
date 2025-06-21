import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Database, Palette, TrendingUp, Users, BarChart3, DollarSign, Edit3, ShoppingCart, Target, Check, Star, Mail, Phone, MapPin, Menu, X, ArrowRight, Play, Award, BookOpen, Clock, Globe, Sparkles, Zap, Rocket, Eye, Brain, Heart, Download, Calendar, MessageCircle, Shield, Trophy, Lightbulb, Briefcase, GraduationCap, Building, CheckCircle2, ArrowUp, Github, Linkedin, Twitter, Instagram, Youtube, Camera, Megaphone, PenTool, Layers, Settings } from 'lucide-react';

const UpnextHub = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const domains = [
    { icon: Code, title: "Frontend Development", desc: "React, Vue, Angular, HTML, CSS, JavaScript", color: "from-cyan-400 via-blue-500 to-purple-600", particles: "✨", demand: "High", jobs: "15K+" },
    { icon: Database, title: "Backend Development", desc: "Node.js, Python, Django, Express, MongoDB, SQL", color: "from-green-400 via-emerald-500 to-teal-600", particles: "⚡", demand: "Very High", jobs: "18K+" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Adobe XD, Photoshop, User Research", color: "from-pink-400 via-purple-500 to-indigo-600", particles: "🎨", demand: "High", jobs: "12K+" },
    { icon: TrendingUp, title: "Sales & Business", desc: "B2B Sales, Lead Generation, CRM", color: "from-orange-400 via-red-500 to-pink-600", particles: "📈", demand: "Very High", jobs: "20K+" },
    { icon: Users, title: "HR & Recruitment", desc: "Talent Acquisition, Employee Relations", color: "from-indigo-400 via-purple-500 to-pink-600", particles: "👥", demand: "High", jobs: "10K+" },
    { icon: BarChart3, title: "Digital Marketing", desc: "SEO, SEM, Social Media, Content Marketing", color: "from-rose-400 via-pink-500 to-purple-600", particles: "🚀", demand: "Very High", jobs: "16K+" },
    { icon: DollarSign, title: "Finance & Accounting", desc: "Financial Analysis, Bookkeeping, Tax", color: "from-yellow-400 via-orange-500 to-red-600", particles: "💰", demand: "High", jobs: "14K+" },
    { icon: Edit3, title: "Content Writing", desc: "Copywriting, Blogging, Technical Writing", color: "from-blue-400 via-indigo-500 to-purple-600", particles: "✍️", demand: "High", jobs: "8K+" },
    { icon: ShoppingCart, title: "E-Commerce", desc: "Shopify, Amazon FBA, Dropshipping", color: "from-teal-400 via-cyan-500 to-blue-600", particles: "🛒", demand: "Very High", jobs: "13K+" },
    { icon: Target, title: "Product Management", desc: "Product Strategy, Roadmapping, Analytics", color: "from-purple-400 via-pink-500 to-red-600", particles: "🎯", demand: "High", jobs: "11K+" },
    { icon: Camera, title: "Video Editing", desc: "Premiere Pro, After Effects, DaVinci", color: "from-red-400 via-pink-500 to-purple-600", particles: "🎬", demand: "High", jobs: "9K+" },
    { icon: Megaphone, title: "Public Relations", desc: "Media Relations, Brand Communication", color: "from-green-400 via-blue-500 to-purple-600", particles: "📢", demand: "Medium", jobs: "7K+" }
  ];

  const features = [
    { icon: Award, title: "Industry Certifications", desc: "Get recognized certificates from top industry partners", color: "from-yellow-400 to-orange-500", stats: "95% Pass Rate" },
    { icon: BookOpen, title: "Real Projects", desc: "Work on live client projects and build your portfolio", color: "from-blue-400 to-cyan-500", stats: "200+ Projects" },
    { icon: Clock, title: "Flexible Learning", desc: "Part-time, full-time, and weekend options", color: "from-green-400 to-teal-500", stats: "24/7 Support" },
    { icon: Users, title: "Expert Mentorship", desc: "1-on-1 guidance from industry professionals", color: "from-purple-400 to-pink-500", stats: "50+ Mentors" },
    { icon: Globe, title: "Global Opportunities", desc: "Access to international remote positions", color: "from-indigo-400 to-purple-500", stats: "25+ Countries" },
    { icon: TrendingUp, title: "Career Growth", desc: "Fast-track your career with performance-based promotions", color: "from-red-400 to-pink-500", stats: "85% Promoted" },
    { icon: Shield, title: "Guaranteed Placement", desc: "Job guarantee for top 20% performers", color: "from-emerald-400 to-cyan-500", stats: "100% Success" },
    { icon: Briefcase, title: "Industry Connections", desc: "Network with professionals and recruiters", color: "from-orange-400 to-red-500", stats: "500+ Partners" },
    { icon: Lightbulb, title: "Innovation Labs", desc: "Work on cutting-edge technology projects", color: "from-cyan-400 to-blue-500", stats: "50+ Innovations" }
  ];

  const steps = [
    { number: "01", title: "Apply & Assess", desc: "Submit application and complete skills assessment", icon: Rocket, color: "from-blue-500 to-cyan-400", duration: "2-3 days" },
    { number: "02", title: "Interview Process", desc: "Technical and HR interviews with our team", icon: Eye, color: "from-purple-500 to-pink-400", duration: "1 week" },
    { number: "03", title: "Onboarding", desc: "Welcome session and tool setup", icon: Play, color: "from-green-500 to-teal-400", duration: "1 day" },
    { number: "04", title: "Training Phase", desc: "Intensive skill development and mentorship", icon: Brain, color: "from-orange-500 to-red-400", duration: "2-4 weeks" },
    { number: "05", title: "Project Work", desc: "Real client projects and portfolio building", icon: Settings, color: "from-indigo-500 to-purple-400", duration: "8-12 weeks" },
    { number: "06", title: "Certification", desc: "Certificate, LOR, and performance report", icon: Award, color: "from-yellow-500 to-orange-400", duration: "1 day" },
    { number: "07", title: "Job Placement", desc: "Interview preparation and job placement", icon: Heart, color: "from-pink-500 to-purple-400", duration: "2-4 weeks" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frontend Intern → Senior React Developer",
      content: "UpnextHub transformed my career! From a complete beginner to landing a ₹8 LPA job at a top startup. The mentorship and real projects made all the difference.",
      rating: 5,
      avatar: "🌟",
      company: "TechCorp India",
      salary: "₹8 LPA",
      location: "Bangalore"
    },
    {
      name: "Arjun Patel",
      role: "Marketing Intern → Growth Manager",
      content: "Best decision ever! Learned digital marketing from scratch, worked with real clients, and now I'm leading a team of 10 marketers. The ROI on this internship is incredible!",
      rating: 5,
      avatar: "🚀",
      company: "GrowthHub",
      salary: "₹12 LPA",
      location: "Mumbai"
    },
    {
      name: "Sneha Gupta",
      role: "UI/UX Intern → Product Designer",
      content: "The design thinking workshops and client projects at UpnextHub gave me the confidence to switch careers. Now I'm designing products used by millions!",
      rating: 5,
      avatar: "🎨",
      company: "DesignFirst",
      salary: "₹10 LPA",
      location: "Hyderabad"
    },
    {
      name: "Rohit Kumar",
      role: "Backend Intern → Tech Lead",
      content: "From learning basic Python to architecting microservices for a fintech company. The progression at UpnextHub was incredible - practical learning at its best!",
      rating: 5,
      avatar: "⚡",
      company: "FinTech Solutions",
      salary: "₹15 LPA",
      location: "Pune"
    },
    {
      name: "Anisha Reddy",
      role: "Content Intern → Marketing Head",
      content: "Started as a content writer intern, learned SEO, social media, and strategy. Within 18 months, I was promoted to head the entire marketing department!",
      rating: 5,
      avatar: "✍️",
      company: "ContentPro",
      salary: "₹14 LPA",
      location: "Chennai"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience to apply?",
      answer: "Not at all! We welcome complete beginners, students, fresh graduates, and career switchers. Our programs are designed to take you from zero to hero with comprehensive training and mentorship.",
      icon: "🎓"
    },
    {
      question: "Are the internships remote or in-office?",
      answer: "We offer flexible options - remote, hybrid, and in-office based on your preference and company requirements. 70% of our internships are remote-friendly.",
      icon: "🌐"
    },
    {
      question: "What kind of certificate will I receive?",
      answer: "You'll receive an industry-recognized certificate, detailed performance report, letter of recommendation, and LinkedIn skill endorsements upon successful completion.",
      icon: "📜"
    },
    {
      question: "Is there any fee to apply or participate?",
      answer: "Basic applications are completely free. Premium tracks may have small fees (₹999-₹2999) to cover mentor costs and ensure serious commitment.",
      icon: "💳"
    },
    {
      question: "What are my chances of getting hired?",
      answer: "85% of our interns receive job offers within 6 months. Top 20% performers get guaranteed placement assistance with our partner companies.",
      icon: "💼"
    },
    {
      question: "Can I switch domains during the internship?",
      answer: "Yes! We allow one domain switch within the first 2 weeks if you find your interests align better with another field.",
      icon: "🔄"
    },
    {
      question: "Do you provide placement support?",
      answer: "Absolutely! We offer resume building, interview preparation, mock interviews, and direct connections with 500+ hiring partners.",
      icon: "🎯"
    },
    {
      question: "What is the duration of internships?",
      answer: "Internships range from 8-16 weeks depending on the domain and complexity. Part-time options (3-6 months) are also available for working professionals.",
      icon: "⏰"
    }
  ];

  const companies = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🖥️" },
    { name: "Amazon", logo: "📦" },
    { name: "Flipkart", logo: "🛍️" },
    { name: "Swiggy", logo: "🍕" },
    { name: "Zomato", logo: "🍽️" },
    { name: "Paytm", logo: "💰" },
    { name: "Byju's", logo: "📚" },
    { name: "Ola", logo: "🚗" },
    { name: "Razorpay", logo: "💳" },
    { name: "Freshworks", logo: "🔧" },
    { name: "Zoho", logo: "📊" }
  ];

  const stats = [
    { number: "2500+", label: "Successful Interns", icon: "👥" },
    { number: "150+", label: "Partner Companies", icon: "🏢" },
    { number: "15+", label: "Domain Expertise", icon: "🎯" },
    { number: "95%", label: "Job Placement Rate", icon: "📈" },
    { number: "₹8.5 LPA", label: "Average Package", icon: "💰" },
    { number: "25+", label: "Countries Served", icon: "🌍" }
  ];

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

      {/* Enhanced Custom Styles */}
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

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-glow">
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
        
        {/* Enhanced Mobile Menu */}
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

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in-up">
            {/* Enhanced Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 glow-effect">
              <Sparkles className="mr-2 text-yellow-400 animate-pulse" size={20} />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                #1 Internship Platform in India • 2500+ Success Stories
              </span>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-glow">
                  Launch
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-glow">
                  Your Career
                </span>
              </h1>
              
              <div className="relative">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-4">
                  with Real-World
                </h2>
                <div className="inline-block relative">
                  <span className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent text-glow">
                    Internships!
                  </span>
                  <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🚀</div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Transform your potential into expertise with our premium internship programs across
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold"> 15+ domains </span>
              including Frontend, Backend, AI/ML, Marketing, HR, Sales, Finance, and more. 
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent font-semibold"> Learn by doing, get certified, and land your dream job!</span>
            </p>

            {/* Enhanced CTA Buttons */}
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

            {/* Enhanced Stats */}
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

            {/* Trusted by Companies */}
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

      {/* About Section */}
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
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-3d"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.desc}</p>
                  <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
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
            {domains.map((domain, index) => (
              <div 
                key={index} 
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-3d group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${domain.color} rounded-2xl opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${domain.color} flex items-center justify-center text-white mr-4`}>
                      <domain.icon size={24} />
                    </div>
                    <div className="text-4xl">{domain.particles}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{domain.desc}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Demand: <span className="font-semibold text-white">{domain.demand}</span></span>
                    <span>Jobs: <span className="font-semibold text-white">{domain.jobs}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our 7-Step Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From application to placement, our structured approach ensures you gain maximum value from your internship.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0`}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-3d">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{step.desc}</p>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock size={16} className="mr-2" />
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Icon */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-center relative">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl`}>
                      <step.icon size={40} />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 hidden lg:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Don't just take our word for it. Hear from our alumni who transformed their careers through UpnextHub.
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="flex items-start mb-6">
                          <div className="text-4xl mr-4">{testimonial.avatar}</div>
                          <div>
                            <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                            <p className="text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-lg text-gray-300 mb-6">"{testimonial.content}"</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Placed at <span className="font-semibold text-white">{testimonial.company}</span></p>
                          <p className="text-sm text-gray-400">{testimonial.salary} • {testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-6' : 'bg-gray-700'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 bg-gradient-to-b from-black via-pink-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to know about our internship programs. Can't find an answer? Contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{faq.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                  </div>
                  <ChevronRight 
                    size={24} 
                    className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 pb-5 transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-300 pl-12">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Get in touch with our team or apply now to start your journey with UpnextHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <p className="text-lg font-medium">hello@upnexthub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Phone</h4>
                    <p className="text-lg font-medium">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Office</h4>
                    <p className="text-lg font-medium">Bangalore, India</p>
                    <p className="text-gray-400">Remote internships available worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn" },
                    { icon: Twitter, name: "Twitter" },
                    { icon: Instagram, name: "Instagram" },
                    { icon: Youtube, name: "YouTube" }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Domain</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Select your preferred domain</option>
                      {domains.map((domain, index) => (
                        <option key={index}>{domain.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Tell us about yourself</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="Your background, skills, and career goals..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-5 h-5 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-gray-400 text-sm">
                    I agree to the <a href="#" className="text-purple-400 hover:underline">terms and conditions</a>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                UpnextHub
              </h3>
              <p className="text-gray-400 mb-6">
                Transforming careers through real-world internships and mentorship.
              </p>
              <div className="flex space-x-4">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Domains', 'Process', 'Success Stories', 'FAQ', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Domains</h4>
              <ul className="space-y-3">
                {domains.slice(0, 6).map((domain) => (
                  <li key={domain.title}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {domain.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on new internship opportunities.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-r-lg text-white hover:opacity-90 transition-opacity duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 UpnextHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default UpnextHub;
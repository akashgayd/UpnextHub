import { ArrowRight, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { domains } from "../../constants/domains";

const Footer = () => {
  return (
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
  );
};

export default Footer;
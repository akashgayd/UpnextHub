import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { domains } from "../../constants/domains";

const Contact = () => {
  return (
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
                  <p className="text-lg font-medium">upnexthubtech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <p className="text-lg font-medium">+91 9922670821</p>
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
                    placeholder="upnexthubtech@gmail.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="+91 9922670821"
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
  );
};

export default Contact;
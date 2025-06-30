import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { faqs } from '../../constants/faqs';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
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
  );
};

export default FAQ;
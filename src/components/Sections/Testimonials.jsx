import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../constants/testimonials';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};

export default Testimonials;
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => {
  return (
    <>
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
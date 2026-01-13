// src/components/ui/HeroActionButtons.jsx
import { Link } from 'react-router-dom';

const HeroActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
      <Link
        to="/contact"
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold
                   hover:from-blue-700 hover:to-cyan-700 transition-all duration-300
                   flex items-center justify-center shadow-lg hover:shadow-blue-400/30
                   transform hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Contact Me
      </Link>

      <Link
        to="/resume"
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold
                   hover:from-blue-700 hover:to-cyan-700 transition-all duration-300
                   flex items-center justify-center shadow-lg hover:shadow-blue-400/30
                   transform hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6z"
            clipRule="evenodd"
          />
        </svg>
        View Resume
      </Link>
    </div>
  );
};

export default HeroActionButtons;

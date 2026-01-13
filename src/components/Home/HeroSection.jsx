import profileImage from '../../assets/img/mohammed-mbarak.jpg';
import HeroActionButtons from '../ui/HeroActionButtons';

const HeroSection = () => {
  return (
    <section className="text-gray-800 py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-500" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Profile Image — kept exactly as original */}
        <div className="md:w-2/5 flex justify-center mb-10 md:mb-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-30 animate-pulse" />
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={profileImage}
                alt="Mohammed Mbarak"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 25%' }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
            Mohammed Hassan
          </h1>

          {/* Updated header to match summary */}
          <p className="text-xl md:text-2xl mb-6 text-gray-700 font-medium">
            Security Analyst | Full-Stack & Mobile Developer
          </p>

          <div className="mb-6">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse" />
              <span className="text-sm text-gray-700">Available for security consulting</span>
            </div>
          </div>

          {/* Imported buttons component */}
          <HeroActionButtons />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

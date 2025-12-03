import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const projects = [
    {
      title: "QR Code Studio – Full Stack Generator",
      description: "A modern MERN stack QR code generator with multiple QR types, customization, history tracking, and image downloads.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "QR Code"],
      github: "https://github.com/mohammed-mbarak/QRStudio",
      demo: "https://qrstudio.onrender.com"
    },
    {
      title: "NovaHealth – Healthcare Information Platform",
      description: "A modern healthcare portal with secure patient dashboards, JWT authentication, and responsive UI built on the MERN stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/mohammed-mbarak/NOVAHEALTH",
      demo: "https://novahealth.onrender.com"
    },
    {
      title: "ChamaPulse – Group Finance Tracker",
      description: "A platform for managing chama (group savings) with member contributions, expense tracking, and financial analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/mohammed-mbarak/CHAMAPULSE",
      demo: "https://chamapulse.onrender.com/"
    },
    {
      title: "WeatherWhiz – Real-time Weather App",
      description: "Frontend React app fetching live weather data via OpenWeather API with geolocation, unit toggling, and a clean modern design.",
      technologies: ["React", "OpenWeather API", "Vercel"],
      github: "https://github.com/mohammed-mbarak/WeatherWhiz",
      demo: "https://weather-whiz-mu.vercel.app/"
    },
    {
      title: "Travel AI Assistant",
      description: "AI-powered travel planner built with FastAPI backend and Next.js frontend. Helps users with travel documentation and planning.",
      technologies: ["FastAPI", "Next.js", "AI APIs"],
      github: "https://github.com/mohammed-mbarak/TRAVEL-AI-ASSISTANT",
      demo: "https://travel-ai-assistant-tau.vercel.app/"
    },
    {
      title: "CineHorizon – Movie Discovery & Live Trailer Streaming",
      description: "Movie discovery application powered by third-party APIs, featuring live search, trailers, sleek UI, and fast browsing experience.",
      technologies: ["React", "Movie APIs", "TMDB API", "Netlify"],
      github: "https://github.com/mohammed-mbarak/CINEHORIZON",
      demo: "https://cinehorizon.netlify.app/"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;

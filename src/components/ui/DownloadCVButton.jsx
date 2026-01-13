// src/components/ui/DownloadCVButton.jsx
const DownloadCVButton = () => {
  const handleDownload = () => {
    const downloadUrl =
      'https://drive.google.com/uc?export=download&id=1Zh7j6JEzxgi7Tj2Qt-69obUmGBZqJIMD';

    // Mobile browsers need direct navigation
    window.location.href = downloadUrl;
  };

  return (
    <div className="mt-12 text-center">
      <button
        onClick={handleDownload}
        className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500
                   text-white font-semibold shadow-lg
                   hover:from-cyan-600 hover:to-blue-600
                   transition-all duration-300"
      >
        📄 Download CV
      </button>
    </div>
  );
};

export default DownloadCVButton;

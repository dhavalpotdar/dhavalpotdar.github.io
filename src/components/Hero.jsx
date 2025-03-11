const Hero = () => {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <img
          src="./src/assets/headshot.jpg" // Replace with your image
          alt="Dhaval Potdar"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Dhaval Potdar</h1>
        <p className="text-lg text-gray-400 mt-2">Data Scientist | AI/ML Engineer | Product Data Scientist</p>
        <div className="mt-6 flex justify-center space-x-4">
        <a href="#contact" 
            className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-gray-200">
            Get in Touch
        </a>
        <a href="#projects" 
            className="px-6 py-3 border border-white text-white font-medium rounded-lg shadow-md transition hover:bg-gray-800">
            View Projects
        </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
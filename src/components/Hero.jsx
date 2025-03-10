const Hero = () => {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <img
          src="/headshot.jpg" // Replace with your image
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-md"
        />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Dhaval Potdar</h1>
        <p className="text-lg text-gray-400 mt-2">Data Scientist | AI/ML Engineer | Product Data Scientist</p>
        <div className="mt-6 space-x-4">
          <a href="#contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">Get in Touch</a>
          <a href="#projects" className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg">View Projects</a>
        </div>
      </section>
    );
  };
  
  export default Hero;
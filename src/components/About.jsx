const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          I am a Data Scientist with a strong background in AI/ML, cloud solutions, and large-scale analytics.
        </p>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-gray-900 p-4 m-2 rounded-lg shadow-lg">
            <h3 className="font-bold text-blue-400">Machine Learning</h3>
            <p className="text-gray-400">Neural Networks, Generative AI, LLM Fine-Tuning</p>
          </div>
          <div className="bg-gray-900 p-4 m-2 rounded-lg shadow-lg">
            <h3 className="font-bold text-blue-400">Programming</h3>
            <p className="text-gray-400">Python, TensorFlow, PyTorch, LangChain</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
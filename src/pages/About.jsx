import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Profile & Title */}
        <div className="flex flex-col items-center text-center">
          <img
            src="./src/assets/headshot.jpg"
            alt="Dhaval Potdar"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4">Dhaval Potdar</h1>
          <p className="text-lg text-gray-400 mt-2">
            Data Scientist & AI/ML Engineer | Product Data Scientist
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faDatabase} className="mr-2 text-white text-2xl" />
            Professional Summary
          </h2>
          <p className="bg-gray-800 p-6 rounded-lg shadow-lg">
            I am a Data Scientist and AI/ML Engineer with a strong background in cloud solutions, large-scale analytics, and generative AI. I specialize in optimizing AI-driven systems and building scalable data pipelines.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-white text-2xl" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">Neural Networks</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">Generative AI</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">LLM Fine-Tuning</span>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Cloud & MLOps</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">AWS SageMaker</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">Docker</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">CI/CD</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-white text-2xl" />
            Education
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Master's in Data Science</h3>
            <p className="text-gray-400">Duke University | 2024</p>

            <h3 className="text-lg font-semibold mt-4">Bachelor's in Electrical Engineering</h3>
            <p className="text-gray-400">[Your University] | [Graduation Year]</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
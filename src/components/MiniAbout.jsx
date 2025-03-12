import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faCogs} from "@fortawesome/free-solid-svg-icons";
import Skills from "./Skills"; // Importing the new Skills component
import Education from "./EducationData"; // Import the updated Education component


const MiniAbout = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* About Me Section */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
            <span className="text-gray-300 text-lg">About Me</span>
          </div>
          <h2 className="text-4xl font-bold mt-4">
            Building AI Solutions and Making Gen AI Safe
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Senior Data Scientist and AI/ML Engineer specializing in AI innovation and safety.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-4 py-2 bg-gray-800 text-sm rounded-lg">Gen AI Safety Specialist</span>
            <span className="px-4 py-2 bg-gray-800 text-sm rounded-lg">Machine Learning Engineer</span>
            <span className="px-4 py-2 bg-gray-800 text-sm rounded-lg">Data Storyteller</span>
          </div>
        </div>

        {/* Education Section (Now Imported) */}
        <Education />

        {/* Technical Skills Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faCogs} className="mr-2 text-white text-2xl" />
            Technical Skills
          </h2>
          <Skills />
        </div>

        {/* Learn More Button - Now at the Bottom */}
        <div className="mt-10 text-center">
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-gray-200"
          >
            Learn More About Me →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;
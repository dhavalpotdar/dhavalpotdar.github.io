import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaFilePdf, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../pages/Projects"; // ✅ Import full projects array

const featuredProjects = projects.slice(0, 3); // ✅ Dynamically select first 3 projects

// Framer Motion Variants for staggered loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delays each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProjects = () => {
  return (
    <section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-black text-white p-6 md:p-12"
    >
      <h2 className="text-5xl font-bold text-center">Featured Projects</h2>
      <p className="text-gray-400 mt-2 text-lg text-center">
        A selection of my top projects in AI & Data Science
      </p>
      <motion.div
        className="grid sm:grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {featuredProjects.map((project, index) => (
          <a 
          key={index} 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transform transition duration-300 hover:scale-[1.02] text-white hover:text-white cursor-pointer"
        >
          <motion.div
            key={index}
            className="border border-gray-700 bg-black p-6 rounded-lg shadow-lg flex flex-col"
            variants={itemVariants}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Project Details */}
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-black border border-gray-700 px-3 py-1 rounded-lg text-sm text-gray-400 tag-hover"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Conditional Links Section */}
            <div className="mt-4 flex space-x-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-blue-500"
                >
                  <FaGithub className="text-2xl" />
                  <span>GitHub</span>
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-red-400 hover:text-red-500"
                >
                  <FaYoutube className="text-2xl" />
                  <span>YouTube</span>
                </a>
              )}
              {project.report && (
                <a
                  href={project.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-red-400 hover:text-green-500"
                >
                  <FaFilePdf className="text-2xl" />
                  <span>Project Report</span>
                </a>
              )}
              {project.publication && (
                <a
                  href={project.publication}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-500"
                >
                  <FaBook className="text-2xl" />
                  <span>Publication</span>
                </a>
              )}
            </div>

          </motion.div>
          </a>
        ))}
      </motion.div>

      {/* View All Projects Button - At the Bottom */}
    <div className="mt-10 text-center">
      <Link
        to="/projects"
        className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-gray-200"
      >
        View All Projects →
      </Link>
    </div>
    </section>
  );
};

export default FeaturedProjects;
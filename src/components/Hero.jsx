import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen flex flex-col items-center justify-center text-center bg-black text-white"
    >
      <motion.img
        variants={itemVariants}
        src="/assets/headshot.jpg"
        alt="Dhaval Potdar"
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-gray-700 shadow-lg"
      />
      <motion.h1 variants={itemVariants} className="text-6xl font-bold mt-4">
        Hi, I'm Dhaval Potdar
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-gray-400 mt-2">
        Data Scientist | AI/ML Engineer | Generative AI Specialist
      </motion.p>

      {/* Buttons Section */}
      <motion.div variants={itemVariants} className="mt-6 flex justify-center space-x-4">
        {/* Email Me Button */}
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-blue-700"
        >
          Email Me
        </a>

        {/* View Projects Button */}
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 border border-white text-white font-medium rounded-lg shadow-md transition hover:bg-gray-800"
        >
          View Projects
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
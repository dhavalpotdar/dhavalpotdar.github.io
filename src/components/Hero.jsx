import { motion } from "framer-motion";

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
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white"
    >
      <motion.img
        variants={itemVariants}
        src={`${process.env.PUBLIC_URL}/headshot.jpg`}
        alt="Dhaval Potdar"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 shadow-lg"
      />
      <motion.h1 variants={itemVariants} className="text-4xl font-bold mt-4">
        Hi, I'm Dhaval Potdar
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-gray-400 mt-2">
        Data Scientist | AI/ML Engineer | Product Data Scientist
      </motion.p>
      <motion.div variants={itemVariants} className="mt-6 flex justify-center space-x-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-gray-200 scroll-link"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-white text-white font-medium rounded-lg shadow-md transition hover:bg-gray-800 scroll-link"
        >
          View Projects
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
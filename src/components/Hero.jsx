import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const scrollToFeaturedMedia = () => {
    const featuredMediaSection = document.getElementById("featured-media");
    if (featuredMediaSection) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 70; // Adjust this based on actual navbar height
      const yOffset = featuredMediaSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // 20px extra padding
  
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center bg-black text-white relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Profile Image */}
      <motion.img
        src="/assets/headshot.jpg"
        alt="Dhaval Potdar"
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-gray-700 shadow-lg"
        variants={itemVariants}
      />
      
      {/* Name & Title */}
      <motion.h1 className="text-6xl font-bold mt-4" variants={itemVariants}>
        Hi, I'm Dhaval Potdar
      </motion.h1>
      <motion.p className="text-xl text-gray-400 mt-2" variants={itemVariants}>
        Data Scientist | AI/ML Engineer | Generative AI
      </motion.p>

      {/* Buttons Section */}
      <motion.div className="mt-6 flex space-x-4" variants={itemVariants}>
        <a
          href="mailto:dhavalspotdar@gmail.com"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md transition hover:bg-gray-200"
        >
          Email Me
        </a>
        <Link
          to="/projects"
          className="px-6 py-3 border border-white text-white font-medium rounded-lg shadow-md transition hover:bg-gray-800"
        >
          View Projects
        </Link>
      </motion.div>

      {/* Clickable Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToFeaturedMedia}
      >
        <FaChevronDown className="text-gray-400 text-2xl animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
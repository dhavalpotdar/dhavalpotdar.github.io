import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Existing Hero Content */}
      <motion.img
        src="/assets/headshot.jpg"
        alt="Dhaval Potdar"
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-gray-700 shadow-lg"
      />
      <motion.h1 className="text-6xl font-bold mt-4">
        Hi, I'm Dhaval Potdar
      </motion.h1>
      <motion.p className="text-xl text-gray-400 mt-2">
        Data Scientist | AI/ML Engineer | Generative AI
      </motion.p>

      {/* Clickable Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center cursor-pointer" // Clickable cursor
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToFeaturedMedia} // Attach Click Event
      >
        <FaChevronDown className="text-gray-400 text-2xl animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
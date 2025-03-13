import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Hobbies Data
const hobbies = [
  {
    name: "Reading",
    details: ["Sapiens - Yuval Noah Harari", "Why Fish Don't Exist - Lulu Miller", "Full Catestrophe Living - Jon Kabat-Zinn", "7 Years in Tibet"],
  },
  {
    name: "Trekking",
    details: ["Brahmatal, India - 12,500 ft.", "Sandakphu, India - 12,000 ft."],
  },
  {
    name: "Running",
    details: ["Best Avg. Pace per km: 4 min. 48 sec."],
  },
  {
    name: "Music",
    details: ["Pink Floyd", "Porcupine Tree", "John Mayer", ],
  },
];

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hobbies = () => {
  return (
    <motion.div
      className="mt-10"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Section Title with Icon */}
      <h2 className="text-3xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faHeart} className="mr-3 text-white text-3xl" />
        Hobbies & Interests
      </h2>

      {/* Hobby Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="bg-black border border-gray-700 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            variants={tileVariants}
          >
            <h3 className="text-lg font-semibold text-white">{hobby.name}</h3>
            <ul className="mt-2 text-gray-400 text-sm list-disc list-inside">
              {hobby.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>

  );
};
export default Hobbies;
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

// Teaching Experience Data
const teachingExperience = [
  {
    school: "Duke University Pratt School of Engineering",
    subject: "ECE684 Natural Language Processing",
    link: "https://graduateschool.bulletins.duke.edu/courses/0263601",
    duration: "Fall 2024",
    location: "Durham, North Carolina, USA",
    description: [
      "Designed and delivered lectures on concepts of Natural Language Processing. Reviewed and graded assignments for a class of 140 ECE students.",
    ],
  },
  {
    school: "Duke University",
    subject: "IDS705 Principles of Machine Learning",
    link: "https://kylebradbury.github.io/ids705/",
    duration: "Spring 2025",
    location: "Durham, North Carolina, USA",
    description: [
      "Designed and delivered lectures on concepts of Machine Learning. Reviewed and graded assignments for a class of 50 Data Science Graduate students.",
    ],
  },

  {
    school: "Duke University Fuqua School of Business",
    subject: "QM701QH Advanced Data Analytics and Applications",
    link: "https://fuqua.bulletins.duke.edu/courses/0254511",
    duration: "Spring 2024",
    location: "Durham, North Carolina, USA",
    description: [
      "Held office hours for 100+ students in the Masters in Quantitative Management.",
    ],
  },
];

const TeachingExperience = () => {
  return (
    <motion.div className="mt-10">
      <h2 className="text-3xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 text-white text-3xl" />
        Teaching
      </h2>

      {/* Teaching Experience List */}
      <div className="mt-6 space-y-6">
        {teachingExperience.map((course, index) => (
          <motion.div
            key={index}
            className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* School & Subject */}
            <a 
              href={course.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-bold text-white hover:text-white transition"
            >
              {course.school} - {course.subject}
            </a>
            <p className="text-gray-400 text-sm">{course.duration}</p>
            <p className="text-gray-500 text-sm">{course.location}</p>

            {/* Description */}
            <ul className="mt-3 list-disc list-inside text-gray-400">
              {course.description.map((point, i) => (
                <p key={i} className="text-sm">{point}</p>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeachingExperience;
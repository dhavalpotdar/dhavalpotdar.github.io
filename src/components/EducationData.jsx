import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const educationData = [
  {
    degree: "Master's in Data Science",
    institution: "Duke University",
    year: "Aug 2024 - May 2025",
  },
  {
    degree: "Bachelor's in Electrical Engineering",
    institution: "University of Mumbai",
    year: "2015 - 2019",
  },
];

const Education = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-white text-2xl" />
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map((edu, index) => (
          <div key={index} className="border border-gray-700 bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution} | {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// Work Experience Data
const workExperience = [
  {
    company: "Think360.ai",
    link: "https://think360.ai/global/",
    duration: "Full-time · 3 yrs 6 mos",
    roles: [
      {
        title: "Machine Learning Engineer",
        dates: "Apr 2022 - Jul 2023 · 1 yr 4 mos",
        location: "Mumbai, India · On-site",
        responsibilities: [
          "Led cross-functional teams in analyzing data to find strategic opportunities for the integration of machine learning. Developed sophisticated forecasting and predictive models, yielding quantifiable benefits for clients."
        ],
        skills: ["Machine Learning", "Python", "AWS", "Time Series Forecasting", "SQL", "ETL", , "Data Products"],
      },
      {
        title: "Data Scientist",
        dates: "Feb 2020 - Apr 2022 · 2 yrs 2 mos",
        location: "Mumbai, India · Hybrid",
        responsibilities: [
          "Assisted several clients in leveraging data for actionable insights, resulting in improved business outcomes."
        ],
        skills: ["Python", "AWS", "Business Strategy", "Product Analytics", "Clien Relations", "Data Storytelling"],
      },
    ],
  },

  {
    company: "Meta",
    link: "https://ai.meta.com/",
    duration: "MS Capstone",
    roles: [
      {
        title: "Generative AI Researcher",
        dates: "Aug 2024 - Present",
        location: "Remote",
        responsibilities: [
          "Reduced non-compliant output by 15% for the next generation of Meta's Emu diffusion models by curating a high-quality dataset of 120K adversarial T2I prompts and working closely with the Generative AI Media Safety team to train content moderation classifiers."
        ],
        skills: ["Generative AI", "T2I Safety", "Benchmarking", "Crowsourcing"],
      },
    ],
  },
  {
    company: "Cere Labs",
    link: "https://www.cerelabs.com/",
    duration: "Full-time · 7 mos",
    roles: [
      {
        title: "AI Research Engineer",
        dates: "Jan 2018 - Dec 2019 · 7 mos",
        location: "Mumbai, India · On-site",
        responsibilities: [
          "Conducted thorough research and executed neural network implementations within TensorFlow to extract information from digital documents."
        ],
        skills: ["OpenCV", "NLP", "Deep Learning", "PyTorch", "Graph Convolutional Neural Networks"],
      },
    ],
  },


  {
    company: "Duke University Dept. of Computer Science",
    link: "https://cs.duke.edu/",
    duration: "Research Assistantship",
    roles: [
      {
        title: "Research Assistant - Generative AI",
        dates: "Jul 2024 - Present",
        location: "Durham, North Carolina, USA · On-site",
        responsibilities: [
          "Developed novel fine-tuning techniques to align LLMs with conflicting human preferences by exploring weight-space interpolation and designing experiments to evaluate non-linear reward interactions in RLHF. Led literature review and research on multi-objective LLM alignment by formulating hypotheses, running experiments, and collaborating on findings for an in-progress publication."
        ],
        skills: ["LLM Fine-tuning", "LLM Alignment", "LLM Safety", "PyTorch"],
      },
    ],
  },


  {
    company: "Durham Public Schools",
    link: "https://www.dpsnc.net/",
    duration: "Internship · 3 mos",
    roles: [
      {
        title: "Data Science Intern",
        dates: "May 2024 - Jul 2024",
        location: "Durham, North Carolina, USA · On-site",
        responsibilities: [
          "Optimized funding allocation across 55 DPS schools by developing regression models for socioeconomic indicators and designing a qGIS dashboard to visualize school-level insights, informing strategies impacting 30,000 students."
        ],
        skills: ["Regression", "Geographic Information Systems", "Pandas", "qGIS"],
      },
    ],
  },

];

const WorkExperience = () => {
    return (
        <div>
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="mr-4 text-white text-3xl" />
          Work Experience
        </h2>
  
        {/* Experience Timeline */}
        <div className="mt-6 space-y-6">
          {workExperience.map((company, companyIndex) => (
            <div
              key={companyIndex}
              className="relative bg-black border border-gray-700 p-6 rounded-lg shadow-lg"
            >
  
              {/* Company Header (Shifted right using pl-16) */}
              <div>
              <a 
                  href={company.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition cursor-pointer"
                >
                  {company.company}
                </a>
                <p className="text-gray-400 text-sm">{company.duration}</p>
              </div>
  
              {/* Vertical Line inside the Box */}
              <div className="border-l-2 border-gray-700 mt-6 ml-6 pl-4">
                {/* Roles within the company */}
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="mb-6">
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <p className="text-gray-400">{role.dates}</p>
                    <p className="text-gray-500 text-sm">{role.location}</p>
  
                    {/* Responsibilities */}
                    <ul className="mt-3 list-disc list-inside text-gray-400">
                      {role.responsibilities.map((task, i) => (
                        <p key={i} className="text-sm">{task}</p>
                      ))}
                    </ul>
  
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-3">
                    {role.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="bg-black text-gray-400 border border-gray-700 px-3 py-1 rounded-lg text-sm tag-hover">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
    );
  };
  
  export default WorkExperience;
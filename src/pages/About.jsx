import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { faCogs } from "@fortawesome/free-solid-svg-icons"; // Import the gear icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCode, faGraduationCap, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import MotionWrapper from "../components/MotionWrapper"; // Import the wrapper
import Skills from "../components/Skills";
import Footer from "../components/Footer"; // Import Footer
import { useLocation } from "react-router-dom";
import WorkExperience from "../components/WorkExperience"; // Import Work Experience component
import TeachingExperience from "../components/TeachingExperience";
import Hobbies from "../components/Hobbies";

const courses = [
    {
      title: "Master's in Data Science",
      institution: "Duke University",
      year: "Aug 2023 - May 2025",
      gpa: "3.95",
      honors: ["Capstone: Generative AI Safety @Meta"],
      activities: [
        "President, AI & Data Science Club",
        "Machine Learning Research Assistant",
        "Data Science Hackathon Finalist"
      ],
      details: [
        {
            name: "ECE 590: Generative AI: Foundations, Applications, and Safety",
            description:
              "Generative AI is revolutionizing content creation by enabling machines to generate text, images, videos, music, and even code. In this course, we will discuss foundations, applications, and safety and security of generative AI."
        },
        {
            name: "COMPSCI 671D: Theory and Algorithms for Machine Learning",
            description:
              "This is an introductory overview course at an advanced level. Covers standard techniques, such as the perceptron algorithm, decision trees, random forests, boosting, support vector machines and reproducing kernel Hilbert spaces, regression, K-means, Gaussian mixture models and EM, neural networks, and multi-armed bandits. Covers introductory statistical learning theory."
        },
        {
            name: "COMPSCI 675D: Introduction to Deep Learning",
            description:
              "Provides an introduction to the machine learning technique called deep learning or deep neural networks. A focus will be the mathematical formulations of deep networks and an explanation of how these networks can be structured and 'learned' from big data. Discussion section covers practical applications, programming, and modern implementation practices. Example code and assignments will be given in Python with heavy utilization of PyTorch (or Tensorflow) package. The course and a project will cover various applications including image classification, text analysis, object detection, etc. Prerequisite: ECE 580, ECE 681, ECE 682D, Statistical Science 561D, or Computer Science 571D."
        },
        {
          name: "ECE 684: Natural Language Processing",
          description:
            "Introduction to the rich opportunities for using textual data produced by websites, social media platforms, digitization of administrative and historical records, and new monitoring technologies to gain insights and make decisions. Accessing textual data through web scraping and application programming interfaces (APIs), preparing these data for analysis, applying modern natural language processing (NLP) techniques, parsing unstructured text using regular expressions implementing end-to-end NLP."
        },
        {
            name: "STA 602L: Bayesian Statistical Modeling",
            description:
              "Principles of data analysis and modern statistical modeling. Exploratory data analysis. Introduction to Bayesian inference, prior and posterior distributions, hierarchical models, model checking and selection, missing data, introduction to stochastic simulation by Markov chain Monte Carlo using a higher level statistical language such as R or MATLAB. Applications drawn from various disciplines."
        },
        {
          name: "IDS 702: Modeling and Representation of Data",
          description:
            "Extract actionable insights and draw inference from real world datasets. Methods for dealing with outliers and missing data, data that does not conform to standard modeling assumptions, data representations and particularly time series data analysis. Principles of causal inference and common frameworks for analysis. Develop critical thinking about issues that affect the success of models in data science. This course will lay the foundation for more in-depth study into statistical techniques for practical data analysis."
        },
        {
            name: "IDS 706: Data Engineering Systems",
            description:
              "Data Engineering Systems is a course about data and how to manage and build systems. Divided into two halves, part 1 focuses on Relational Databases. These systems are the most common type of database used today and are found in applications ranging from holding cell phone contact lists (both Android and iOS use SQLlite3 internally) to managing every aspect of a large bank or insurance company. The second half is dedicated to the concept that a one size database solution doesn't fit anyone. Concepts covered include data lakes, serverless data engineering and NoSQL databases which are part of how cloud-native technologies are used to perform data engineering, MLOps, and Cloud Architecture."
        },
        {
            name: "IDS 705: Principles of Machine Learning",
            description:
              "Automating prediction and decision-making based on data and past experience. Students will learn how and when to apply supervised, unsupervised, and reinforcement learning techniques, and how to evaluate performance. Common pitfalls such as overfitting and data leakage will be explored and how they can be avoided. Topics include model flexibility and regularization; common supervised learning models and ensembles; performance evaluation techniques; dimensionality reduction; clustering; and the fundamentals of reinforcement learning."
        },
        {
          name: "IDS 701: Unifying Data Science",
          description:
            "This course is focused on how to answer questions effectively using quantitative data. By the end of the course, students will be able to recognize different types of questions (e.g. descriptive, causal, and predictive questions), have an understanding of what methodological approaches are most appropriate for answering each type of question, be able to design and critically evaluate data analysis plans, and understand how to tailor their presentation of results to different audiences."
        }
      ]
    },
    {
      title: "Bachelor's in Electrical and Electronics Engineering",
      institution: "University of Mumbai",
      year: "2015 - 2019",
      gpa: "3.85",
      honors: ["Summa Cum Laude", "Best Final Year Project"],
      activities: [
        "Lead Researcher, Embedded Systems Lab",
        "Member, IEEE Student Chapter",
        "Winner, National Robotics Competition"
      ],
      details: [
        {
          name: "FEC 101: Applied Mathematics I",
          description:
            "Covers Complex Numbers, Matrices, Partial Differentiation, Numerical Equations, and Linear Algebra."
        },
        {
          name: "EXS 301: Applied Mathematics III",
          description:
            "Topics include Laplace Transform, Fourier Series, Bessel Functions, and Complex Variables."
        },
        {
          name: "EXE 7052: Artificial Intelligence",
          description:
            "Introduces AI techniques such as Neural Networks, Fuzzy Logic, and Reinforcement Learning."
        }
      ]
    }
  ];


  const About = () => {
    const location = useLocation();

    useEffect(() => {
        // If there's a hash in the URL, scroll to that section
        if (location.hash) {
          setTimeout(() => {
              const targetElement = document.getElementById(location.hash.replace("#", ""));
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
              }
          }, 100);
        } else {
            // ✅ Force an immediate reset to the top of the page before animations
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [location]);
    
    const [openDegree, setOpenDegree] = useState(null);
    const [openCourses, setOpenCourses] = useState({});
  
    // Toggle Degree
    const toggleDegree = (index) => {
      setOpenDegree(openDegree === index ? null : index);
    };
  
    // Toggle Course Descriptions
    const toggleCourse = (degreeIndex, courseIndex) => {
      setOpenCourses((prevState) => ({
        ...prevState,
        [`${degreeIndex}-${courseIndex}`]: !prevState[`${degreeIndex}-${courseIndex}`]
      }));
    };
  
    // **Framer Motion Animation Variants**
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3, // Controls delay between animations
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  
    return (
      <MotionWrapper>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
            {/* Profile & Title - Landscape Layout */}
            <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start bg-black text-white p-6 rounded-lg shadow-lg space-x-6"
            variants={itemVariants}
            >
            {/* Profile Image */}
            <img
                src="/assets/headshot.jpg"
                alt="Dhaval Potdar"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-gray-700 shadow-lg"
            />

            {/* Name & Title */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold">Dhaval Potdar</h1>
                <p className="text-lg text-gray-400 mt-2">
                ML Geek and a Generative AI Evangelist
                </p>

                {/* Tag Labels */}
                <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-lg">AI/ML Engineer</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-lg">Data Scientist</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-lg">Generative AI Researcher</span>
                </div>
            </div>
            </motion.div>
  
          {/* Professional Summary */}
            <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
                <FontAwesomeIcon icon={faUserTie} className="mr-4 text-white text-3xl" />
                Professional Summary
            </h2>
            <p className="text-gray-400">
                I am a Data Scientist and AI/ML Engineer with a strong background in cloud solutions, large-scale analytics, and generative AI. 
                I specialize in optimizing AI-driven systems and building scalable data pipelines.
            </p>
            </motion.div>
  
          {/* Technical Skills */}
            <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
                <FontAwesomeIcon icon={faCogs} className="mr-3 text-white text-3xl" /> {/* Changed icon */}
                Technical Skills
            </h2>
            <Skills />
            </motion.div>
        
            {/* Work Experience Section */}
            <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <WorkExperience />
            </motion.div>
  
          {/* Education Section */}
            <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-white text-3xl" />
                Education
            </h2>

          {courses.map((course, degreeIndex) => (
          <motion.div 
              key={degreeIndex} 
              id={course.id} // Ensure this matches the ID in MiniAbout
              className="border border-gray-700 bg-black p-6 rounded-lg shadow-lg mt-6"
              variants={itemVariants}
          >
            {/* Degree & Institution */}
            <div className="mb-3">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-400">
                {course.institution} <span className="text-gray-500">| {course.year}</span>
              </p>
            </div>
    
    
            <p>Coursework (click to see details):</p>
            {/* <div className="mt-2 flex flex-wrap gap-2">
              {course.honors.map((honor, i) => (
                <span key={i} className="bg-gray-800 text-sm px-3 py-1 rounded-lg text-gray-300 border border-gray-600">
                  {honor}
                </span>
              ))}
            </div> */}

            {/* Coursework List - Styled as Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {course.details.map((detail, courseIndex) => {
                const currentKey = `${degreeIndex}-${courseIndex}`; // Ensure string key
                return (
                  <div 
                    key={courseIndex} 
                    className={`bg-black text-gray-300 px-3 py-1 rounded-lg border border-gray-600 text-sm cursor-pointer transition duration-200 hover:bg-gray-700 
                      ${openCourses === currentKey ? "bg-gray-700" : ""}`}  // Highlight selected item
                    onClick={() => setOpenCourses(openCourses === currentKey ? null : currentKey)}
                  >
                    {detail.name}
                  </div>
                );
              })}
            </div>

            {/* Course Descriptions - Show Only if Expanded */}
            {typeof openCourses === "string" && openCourses.includes(`${degreeIndex}-`) && (
              <motion.div className="mt-4 bg-black p-4 rounded-lg border border-gray-600" variants={itemVariants}>
                <p className="text-gray-400 text-sm">
                  {course.details.find((detail, courseIndex) => openCourses === `${degreeIndex}-${courseIndex}`)?.description}
                </p>
              </motion.div>
            )}

        </motion.div>
      ))}
      </motion.div>

      
      <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
      <TeachingExperience />
      </motion.div>

      <motion.div className="mt-10 p-6 rounded-lg shadow-lg" variants={itemVariants}>
      <Hobbies />
      </motion.div>
        
      </motion.div>
        <Footer />
      </MotionWrapper>
    );
  };
  
  export default About;
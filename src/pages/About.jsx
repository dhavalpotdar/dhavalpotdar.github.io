import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faCode, faGraduationCap, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import MotionWrapper from "../components/MotionWrapper"; // Import the wrapper

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
      title: "Bachelor's in Electrical Engineering",
      institution: "University of Mumbai",
      year: "[Graduation Year]",
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
    // Animation Variants
    const pageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

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
  
    return (
        <MotionWrapper>
        <div className="max-w-4xl mx-auto">
          
          {/* Profile & Title */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/headshot.jpg"
              alt="Dhaval Potdar"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 shadow-lg"
            />
            <h1 className="text-4xl font-bold mt-4">Dhaval Potdar</h1>
            <p className="text-lg text-gray-400 mt-2">
              Data Scientist & AI/ML Engineer | Product Data Scientist
            </p>
          </div>
  
          {/* Professional Summary */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faDatabase} className="mr-2 text-white text-2xl" />
              Professional Summary
            </h2>
            <p className="bg-gray-800 p-6 rounded-lg shadow-lg">
              I am a Data Scientist and AI/ML Engineer with a strong background in cloud solutions, large-scale analytics, and generative AI. I specialize in optimizing AI-driven systems and building scalable data pipelines.
            </p>
          </div>
  
          {/* Technical Skills */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-white text-2xl" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    Neural Networks
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    Deep Learning
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    Generative AI
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    LLM Fine-Tuning
                </span>
                </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Cloud & MLOps</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    AWS SageMaker
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    Docker
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    CI/CD
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm transition-transform transform hover:scale-110">
                    Kubernetes
                </span>
                </div>
            </div>
            </div>
          </div>
  
          {/* Education Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-white text-3xl" />
              Education
            </h2>
  
            {courses.map((course, degreeIndex) => (
              <div key={degreeIndex} className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
                {/* Degree & Institution */}
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDegree(degreeIndex)}>
                  <div>
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-gray-400">{course.institution} <span className="text-gray-500">| {course.year}</span></p>
                  </div>
                  <FontAwesomeIcon icon={openDegree === degreeIndex ? faChevronUp : faChevronDown} className="text-gray-300" />
                </div>
  
                {/* Honors (ALWAYS VISIBLE) */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.honors.map((honor, i) => (
                    <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-lg">{honor}</span>
                  ))}
                </div>

                {/* GPA */}
                <div className="mt-2">
                    <span className="bg-gray-700 text-sm px-3 py-1 rounded-lg">GPA: {course.gpa}</span>
                </div>
  
                {/* Expandable Content */}
                {openDegree === degreeIndex && (
                  <>

  
                    {/* Coursework List */}
                    <div className="mt-4">
                      {course.details.map((detail, courseIndex) => (
                        <div key={courseIndex} className="bg-gray-700 p-3 mt-2 rounded-lg shadow-sm">
                          {/* Course Title Toggle */}
                          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleCourse(degreeIndex, courseIndex)}>
                            <h4 className="text-md font-semibold text-gray-300">{detail.name}</h4>
                            <FontAwesomeIcon
                              icon={openCourses[`${degreeIndex}-${courseIndex}`] ? faChevronUp : faChevronDown}
                              className="text-gray-400"
                            />
                          </div>
  
                          {/* Course Description (Expandable) */}
                          {openCourses[`${degreeIndex}-${courseIndex}`] && (
                            <p className="text-gray-400 text-sm mt-2">{detail.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
  
                    {/* Activities & Societies */}
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-300">Activities & Societies</h4>
                      <ul className="list-disc list-inside text-gray-400">
                        {course.activities.map((activity, i) => (
                          <li key={i} className="text-sm">{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        </MotionWrapper>
    );
  };
  
  export default About;
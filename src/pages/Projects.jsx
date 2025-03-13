import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "../components/MotionWrapper";
import { FaGithub, FaYoutube, FaFilePdf, FaBook } from "react-icons/fa"; // Import PDF icon
import Footer from "../components/Footer"; // Import Footer


const projects = [
  {
      title: "MS Capstone: Text to Image Generative AI Safety with Meta",
      description: "This study analyzes public datasets for T2I model safety, identifying gaps in harm coverage, bias, and ethical risks to improve dataset selection and model robustness. I reduced non-compliant output by 15% for Meta’s Emu diffusion models by curating 120K adversarial prompts and training content moderation classifiers. Additionally, I’m leading a large-scale crowdsourcing study on multilingual T2I safety, designing a full-stack platform to test 8 SOTA models for cultural biases across 10 languages.",
      tags: ["Gen AI Safety", "Crowdsourcing"],
      // github: "https://github.com/dhavalpotdar/interpretable-churn-prediction",
      image: "/assets/projects/Meta-Logo.png",
      publication: "https://ieeexplore.ieee.org/document/10877814",
      url: "https://ieeexplore.ieee.org/document/10877814"
      },
  {
    title: "Academic Chatbot using Graph RAG",
    description:
      "Duke ProfMatch is an AI-powered academic discovery tool that leverages Graph Retrieval-Augmented Generation (RAG) to help Duke students find professors aligned with their research interests. It integrates entity extraction, knowledge graph construction, and vector search using Neo4j to deliver intelligent faculty recommendations. The platform features an interactive graph-based UI, enhancing research exploration and engagement.",
    tags: ["Generative AI", "Graph RAG", "Neo 4j"],
    youtube: "https://youtu.be/z67WamqcfpY?si=jRWmJvSr464ZZUk5", // Only YouTube link
    url: "https://youtu.be/z67WamqcfpY?si=jRWmJvSr464ZZUk5", // Only YouTube link
    image: "/assets/projects/Duke ProfMatch.webp",
  },
  {
    title: "Interpretable X-Ray Classification with ProtoTree",
    description: "Interpretable X-Ray Classification leverages the Neural Prototype Tree (ProtoTree) to enhance model transparency in chest X-ray diagnostics. Unlike traditional CNN-based models that act as black boxes, ProtoTree integrates decision tree-based interpretability into its deep learning pipeline, enabling clinicians to understand why a model reaches a diagnosis. By improving model interpretability, this project supports faster, more reliable decision-making in healthcare, aiding radiologists in early disease detection while reducing diagnostic uncertainty.",
    tags: ["PyTorch", "CNN", "Soft Decision Trees"],
    github: "https://github.com/dhavalpotdar/prototree", // Only GitHub link
    url: "https://github.com/dhavalpotdar/prototree", // Only GitHub link
    image: "/assets/projects/Interpretable X-Ray.webp",
    report: "https://github.com/dhavalpotdar/prototree/blob/main/IDS705%20Final%20Project%20-%20Interpretable%20Image%20Classification.pdf"
  },
  {
    title: "Interpretable Churn Prediction",
    description: "Interpretable Churn Prediction applies interpretable machine learning techniques to predict customer churn while providing actionable insights for decision-makers. Unlike traditional black-box models, this project utilizes Globally Optimized Sparse Decision Trees (GOSDT), Generalized Additive Models (GAMs), Sparse Generalized Linear Models (L0Learn), and Explainable Boosting Machines (EBMs) to balance accuracy and transparency. The study highlights how interpretable models can offer competitive performance while enabling businesses to understand key churn drivers, such as contract type, tenure, and payment methods, allowing for targeted customer retention strategies.",
    tags: ["Interpretable Machine Learning"],
    github: "https://github.com/dhavalpotdar/interpretable-churn-prediction",
    url: "https://github.com/dhavalpotdar/interpretable-churn-prediction",
    image: "/assets/projects/Interpretable Churn.webp",
    report: "https://github.com/dhavalpotdar/interpretable-churn-prediction/blob/main/InterpretableChurnPredictionReport.pdf"
  },

  {
    title: "Sentiment Analysis Application with Transformers",
    description: "Sentiment Analysis with Transformers leverages Hugging Face's pre-trained transformer models to perform efficient sentiment classification using transfer learning on textual data. The application is built with Flask, where the model is instantiated via Hugging Face's pipeline module for seamless inference. Users input text, and the model predicts sentiment in real time. The system allows for model customization, enabling users to explore and fine-tune different transformer architectures to suit various NLP tasks by modifying the model loading pipeline. This project demonstrates expertise in deploying transformer-based NLP models in production-ready applications.",
    tags: ["Transformers", "HuggingFace", "Flask"],
    github: "https://github.com/dhavalpotdar/autoscaling-flask",
    url: "https://github.com/dhavalpotdar/autoscaling-flask",
    image: "/assets/projects/Sentiment Analysis.webp",
    youtube: "https://www.loom.com/share/ef9fba9169fa40ad857f48f97426e4d9?sid=786dc464-85f5-48d0-a560-6f0ad33bc28a"
  },

  {
    title: "Diabetic Retinopathy Detection with Vision Transformer",
    description: "Automated Diabetic Retinopathy Detection applies deep learning to retinal image analysis, enabling automated and early detection of Diabetic Retinopathy (DR). Using a multi-class classification model, the system predicts the probability of five DR severity levels: Healthy, Mild, Moderate, Proliferative, and Severe. The application allows users to upload retinal images, and upon prediction, it outputs probability scores for each class. By automating DR screening, this project addresses the shortage of specialized medical resources, reduces diagnostic delays, and enhances early intervention, potentially preventing vision loss for millions of diabetes patients globally.",
    tags: ["Vision", "HuggingFace", "CI/CD"],
    github: "https://github.com/titusrobin/diabetic-retinopathy-vit",
    url: "https://github.com/titusrobin/diabetic-retinopathy-vit",
    image: "/assets/projects/Diabetic Retinopathy.webp",
    // youtube: "https://www.loom.com/share/ef9fba9169fa40ad857f48f97426e4d9?sid=786dc464-85f5-48d0-a560-6f0ad33bc28a"
  },
];

// Framer Motion Variants for staggered loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delays each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
    useEffect(() => {
            window.scrollTo(0, 0); // Forces the page to scroll to the top on load
          }, [])
    return (
      <MotionWrapper>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen bg-black text-white p-6 md:p-12"
        >
          <h2 className="text-5xl font-bold text-center">Projects</h2>
          <p className="text-gray-400 mt-2 text-lg text-center">
            A collection of my documented AI/ML projects.
          </p>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition duration-300 hover:scale-[1.02] text-white hover:text-white cursor-pointer"
            >
              <motion.div
                className="border border-gray-700 bg-black p-6 rounded-lg shadow-lg flex flex-col 
                           transform transition-transform duration-300 hover:scale-[1.02]"
                variants={itemVariants}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
  
                {/* Project Details */}
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
  
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-black border border-gray-700 px-3 py-1 rounded-lg text-sm text-gray-400 tag-hover"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
  
                {/* Conditional Links Section */}
                <div className="mt-4 flex space-x-4 flex-wrap">
                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-500"
                    >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                    </a>
                )}
                {project.youtube && (
                    <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-400 hover:text-red-500"
                    >
                    <FaYoutube className="text-2xl" />
                    <span>YouTube</span>
                    </a>
                )}
                {project.report && (
                    <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-500"
                    >
                    <FaFilePdf className="text-2xl" />
                    <span>Project Report</span>
                    </a>
                )}
                {project.publication && (
                    <a
                    href={project.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-500"
                    >
                    <FaBook className="text-2xl" />
                    <span>Publication</span>
                    </a>
                )}
                </div>
              </motion.div>
            </a>
            ))}
          </motion.div>
        </motion.section>
        <Footer />
      </MotionWrapper>
    );
  };
  
  export default Projects;
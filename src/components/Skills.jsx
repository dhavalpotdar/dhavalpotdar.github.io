import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faServer, faCode, faChartBar } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "AI & Machine Learning",
    icon: faBrain,
    items: ["Neural Networks", "Reinforcement Learning", "Deep Learning", "Generative AI", "LLM Fine-Tuning"],
  },
  {
    category: "Cloud Architecture & MLOps",
    icon: faServer,
    items: ["AWS SageMaker", "Docker/Kubernetes", "CI/CD", "Vector DBs", "GitHub Workflows", "Flask"],
  },
  {
    category: "Programming",
    icon: faCode,
    items: ["Python", "SQL", "R", "TensorFlow", "PyTorch", "Hugging Face Transformers"],
  },
  {
    category: "Data Science",
    icon: faChartBar,
    items: ["Feature Engineering", "Clustering", "Dimensionality Reduction", "Bayesian Statistical Modeling", "Interpretable Machine Learning"],
  },
];

const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="border border-gray-700 bg-black p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold flex items-center">
            <FontAwesomeIcon icon={skill.icon} className="mr-2 text-white text-lg" />
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skill.items.map((item, i) => (
              <span key={i} className="bg-black text-gray-400 border border-gray-700 px-3 py-1 rounded-lg text-sm tag-hover">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
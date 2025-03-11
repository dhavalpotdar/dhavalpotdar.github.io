const projects = [
  {
    title: "AI Document Summarizer",
    description: "An AI-powered tool for summarizing research papers.",
    tags: ["NLP", "Python", "Transformers"],
    image: "/images/ai_summarizer.png",
    link: "#"
  },
  {
    title: "Autonomous Drone Navigation",
    description: "A reinforcement learning-based drone navigation system.",
    tags: ["RL", "TensorFlow", "ROS"],
    image: "/images/drone_navigation.png",
    link: "#"
  },
  {
    title: "Financial Forecasting Dashboard",
    description: "A dashboard that predicts stock trends using ML models.",
    tags: ["Finance", "Time Series", "Dash"],
    image: "/images/finance_dashboard.png",
    link: "#"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mt-12">Featured Projects</h2>
      <p className="text-gray-400 mt-2 text-lg text-center">
        A selection of my recent work in AI & Data Science.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded-lg text-sm text-blue-400">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} className="block mt-4 text-blue-400 hover:text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
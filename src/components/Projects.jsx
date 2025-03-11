const projects = [
    {
      title: "Project 1",
      description: "A machine learning project description.",
      tags: ["Python", "ML", "Pandas"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A deep learning model implementation.",
      tags: ["TensorFlow", "Deep Learning"],
      link: "#"
    }
  ];
  
  const Projects = () => {
    return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-700 px-2 py-1 rounded-lg text-sm text-blue-400 mr-2">
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
  
  export default Projects;
import React from "react";
import { FaLinkedin, FaExternalLinkAlt, FaMedium } from "react-icons/fa"; // Import LinkedIn & external link icons
import { SiArxiv, SiIeee } from "react-icons/si"; // Import ArXiv & IEEE icons


const featuredMedia = [
    {
        type: "publication",
        title: "Publication with Meta: A Systematic Review of Open Datasets used in Text-to-Image (T2I) Gen AI Model Safety",
        abstract: "Novel research aimed at text-to-image (T2I) generative AI safety often relies on publicly available datasets for training and evaluation, making the quality and composition of these datasets crucial. This paper presents a comprehensive review of the key datasets used in the T2I research, detailing their collection methods, compositions, semantic and syntactic diversity of prompts...",
        citation: "D. Potdar, T. Bavalatti et al. “A Systematic Review of Open Datasets used in Text-to-Image (T2I) Gen AI Model Safety,” IEEE Access, Jan. 2025",
        thumbnail: "/assets/projects/Meta-Logo.png",
        arxiv: "https://arxiv.org/abs/2503.00020",
        ieee: "https://ieeexplore.ieee.org/document/10877814",
      },
    {
      type: "youtube",
      title: "Panel: Duke Center for Community Engagement Launch",
      url: "https://www.youtube.com/embed/Zmc5ToIH1kQ",
      excerpt: "It was an absolute honor to share the stage with distinguished leaders, including the President of Duke University, the President of Durham Tech, and the Superintendent of Durham Public Schools. Our panel, 'Perspectives on Collaborative Projects,' explored the challenges and successes of working across disciplines and sectors to tackle pressing regional issues."
    },
    // {
    // type: "medium",  // New type for Medium articles
    // title: "Using Graph Convolutional Neural Networks on Structured Documents for Information Extraction",
    // url: "https://medium.com/towards-data-science/using-graph-convolutional-neural-networks-on-structured-documents-for-information-extraction-c1088dcd2b8f",
    // thumbnail: "/assets/media/GCN.webp",
    // excerpt: "While Deep Learning solutions such as CNNs effectively capture patterns in data in Euclidean space, there is an increasing number of applications where data is represented in the form of a Graph and lack a grid-like regularity. As Graphs can be...",
    // },
    {
      type: "linkedin",
      title: "Community Engaged Data Science: Mapping Home Prices for Student Wealth Distribution",
      url: "https://www.linkedin.com/pulse/mapping-home-prices-durham-county-dhaval-potdar",
      thumbnail: "/assets/media/DPS.png",
      excerpt: "With 57 schools under its belt and enrolling 32,000 students, Durham Public Schools (DPS) faced a significant challenge – how can we pinpoint which students need the most financial support to succeed in school?",
    },
    // {
    //   type: "video",
    //   title: "My AI Project Presentation",
    //   url: "/assets/videos/ai-presentation.mp4",
    // },
    // {
    // type: "video",
    // title: "My AI Project Presentation",
    // url: "https://drive.google.com/uc?export=download&id=1Eol3EofvU7-xfEjbQhq2k4lt5Ad2KOWv",
    // }
  ];


  const FeaturedMedia = () => {
    return (
      <section className="max-w-6xl mx-auto text-white py-12">
        <h2 className="text-5xl font-bold text-center">Highlights</h2>
        <p className="text-gray-400 mt-2 text-lg text-center">
          Here are the works I'm most proud of...
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featuredMedia.map((media, index) => (
            <div key={index} className="bg-black border border-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{media.title}</h3>
  
              {/* Render YouTube Video with Excerpt */}
            {media.type === "youtube" && (
            <div>
                <iframe
                className="w-full h-48 rounded-lg"
                src={media.url}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                ></iframe>
                {media.excerpt && (
                <p className="text-gray-400 text-sm mt-3">{media.excerpt}</p>
                )}
            </div>
            )}
  
              {/* Render LinkedIn & General Articles (with Preview & Excerpt) */}
              {(media.type === "article" || media.type === "linkedin" || media.type === "medium") && (
                <div>
                  <a href={media.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={media.thumbnail}
                      alt={media.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity image-hover"
                    />
                  </a>
                  <p className="text-gray-400 text-sm mb-3">{media.excerpt}</p>
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-500"
                  >
                    {media.type === "linkedin" && <FaLinkedin className="w-5 h-5" />}
                    {media.type === "medium" && <FaMedium className="w-5 h-5" />}
                    {media.type === "article" && <FaExternalLinkAlt className="w-5 h-5" />}
                    <span>Read More</span>
                  </a>
                </div>
              )}

              {/* Render Publication (With Abstract & Citation) */}
                {media.type === "publication" && (
                <div>
                    <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity image-hover"
                    />
                    <p className="text-gray-400 text-sm mb-3">{media.abstract}</p>
                    <p className="text-gray-500 text-xs italic">{media.citation}</p>
                    <div className="flex space-x-4 mt-3">
                    {media.arxiv && (
                        <a href={media.arxiv} target="_blank" rel="noopener noreferrer">
                        <SiArxiv className="w-6 h-6 text-red-500 hover:text-red-400" />
                        </a>
                    )}
                    {media.ieee && (
                        <a href={media.ieee} target="_blank" rel="noopener noreferrer">
                        <SiIeee className="w-6 h-6 text-blue-500 hover:text-blue-400" />
                        </a>
                    )}
                    </div>
                </div>
                )}
  
              {/* Render Uploaded Video */}
                {media.type === "video" && (
                <video className="w-full h-48 rounded-lg" controls>
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                )}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedMedia;
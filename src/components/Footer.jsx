import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Full-width Divider Line */}
      <hr className="border-gray-700 w-full mt-12 mb-6" />

      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-12">
          
          {/* Portfolio Name */}
          <div>
            <h2 className="text-lg font-bold">Portfolio</h2>
            <p className="text-gray-400 text-sm mt-1">
              © {new Date().getFullYear()} Dhaval Potdar. All rights reserved.
            </p>
          </div>

          {/* Quick Links (Without Contact) */}
          <div>
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="text-white text-sm mt-2 space-y-1">
              <li>
                <Link to="/" className="hover:text-gray-400 text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400 text-white transition">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-400 text-white transition">Projects</Link>
              </li>
            </ul>
          </div>

          {/* ✅ Connect Section - White Icons Fix */}
          <div>
            <h3 className="text-md font-semibold">Connect</h3>
            <div className="flex items-center space-x-4 mt-2">
              {/* GitHub */}
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-white hover:text-gray-400 transition" />
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-white hover:text-gray-400 transition" />
              </a>

              {/* Email */}
              <a href="mailto:your.email@example.com">
                <FaEnvelope className="text-2xl text-white hover:text-gray-400 transition" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
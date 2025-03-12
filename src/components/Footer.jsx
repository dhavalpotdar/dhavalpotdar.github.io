import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-12">
        
        {/* Portfolio Name */}
        <div>
          <h2 className="text-lg font-bold">Portfolio</h2>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} Dhaval Potdar. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="text-white text-sm mt-2 space-y-1">
            <li>
              <Link to="/" className="hover:text-gray-400 text-white transition">Home</Link> {/* Added Home */}
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 text-white transition">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400 text-white transition">Projects</Link>
            </li>
            <li>
              <a href="mailto:your.email@example.com" className="hover:text-gray-400 text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-md font-semibold">Connect</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-gray-400"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
            </a>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope text-2xl hover:text-gray-400"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
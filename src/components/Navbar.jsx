import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Dhaval Potdar | Portfolio</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
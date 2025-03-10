import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">Dhaval Potdar | Portfolio</h1>
        <ul className="flex space-x-6 text-white">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
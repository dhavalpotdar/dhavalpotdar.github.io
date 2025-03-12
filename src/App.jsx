import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects"; // Import FeaturedProjects
import Projects from "./pages/Projects";
import About from "./pages/About";
import MiniAbout from "./components/MiniAbout"; // Import MiniAbout
import FeaturedMedia from "./components/FeaturedMedia"; // Import MiniAbout
import Footer from "./components/Footer";
import React, { useEffect } from "react";


function HomePage() {
  const navigate = useNavigate(); // Hook to navigate to pages
  useEffect(() => {
              window.scrollTo(0, 0); // Forces the page to scroll to the top on load
            }, [])

  return (
    <>
      <Hero navigate={navigate} />
      <FeaturedMedia />  {/* ✅ Add this */}
      <MiniAbout />
      <FeaturedProjects /> {/* Featured Projects will appear below Hero */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
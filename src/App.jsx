import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects"; // Import FeaturedProjects
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./components/Contact"; // Ensure contact remains in main page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page includes Hero and FeaturedProjects */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProjects /> {/* Featured Projects will appear below Hero */}
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
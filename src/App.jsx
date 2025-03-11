import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./pages/About";
import MotionWrapper from "./components/MotionWrapper";

function App() {
  return (
    <Router> {/* Using HashRouter for GitHub Pages support */}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
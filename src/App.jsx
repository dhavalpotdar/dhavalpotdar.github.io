import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./pages/About";
import MotionWrapper from "./components/MotionWrapper";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 50,
            behavior: "smooth",
          });
        }, 300); // Delay slightly to allow rendering
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToSection />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
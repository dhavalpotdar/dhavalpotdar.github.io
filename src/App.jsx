import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Contact />
            </>
          }
        />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
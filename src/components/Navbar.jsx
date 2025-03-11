import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.classList.contains("scroll-link")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);

        if (location.pathname !== "/") {
          navigate("/", { state: { scrollTo: targetId } });
        } else {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 50,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, [location, navigate]);

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Dhaval Potdar | Portfolio</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <a href="#contact" className="hover:text-gray-400 scroll-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
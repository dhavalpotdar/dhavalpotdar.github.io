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
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-black bg-opacity-90 backdrop-blur-md text-white shadow-md">
      <h1 className="text-xl font-bold text-white">Dhaval Potdar</h1>
      <div className="space-x-6">
      <Link
        to="/"
        className="text-white hover:text-gray-400"
        onClick={(e) => {
            if (location.pathname === "/") {
            e.preventDefault(); // Prevents reloading if already on Home
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top
            }
        }}
        >
        Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
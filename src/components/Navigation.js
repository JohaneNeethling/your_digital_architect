import { motion } from "framer-motion"; // Importing framer-motion for animation
import { Link } from "react-router-dom"; // Importing Link component for navigation
import { useState } from "react"; // Importing useState hook to manage component state

const Navigation = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to track mouse position on the screen
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position on mouse move
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {" "}
      {/* Track mouse position in the entire div */}
      {/* Navigation Bar with animations */}
      <motion.nav
        initial={{ opacity: 0 }} // Initial opacity for fade-in animation
        animate={{ opacity: 1 }} // Final opacity for fade-in animation
        transition={{ duration: 1 }} // Duration of the fade-in transition
        className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between bg-transparent backdrop-blur-lg z-50"
      >
        {/* Website title */}
        <h2 className="text-4xl font-noto font-bold text-white">
          Your Digital Architect
        </h2>

        {/* Desktop navigation menu (visible on medium and larger screens) */}
        <ul className="hidden md:flex space-x-10 text-white text-xl">
          {/* Each list item is wrapped in motion for hover effects */}
          <motion.li
            className="text-white hover:text-blue-500 font-medium"
            whileHover={{ scale: 1.1, y: -5 }} // Animation on hover (scaling and slight vertical movement)
            transition={{ type: "spring", stiffness: 300 }} // Smooth spring transition
          >
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li
            className="text-white hover:text-blue-500 font-medium"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/portfolio">Portfolio</Link>
          </motion.li>

          <motion.li
            className="text-white hover:text-blue-500 font-medium"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/skills">Why Me</Link>
          </motion.li>

          <motion.li
            className="text-white hover:text-blue-500 font-medium"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/contactme">Get In Touch</Link>
          </motion.li>
        </ul>

        {/* Hamburger menu button for mobile devices */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu} // Toggle the mobile menu visibility
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon (three horizontal lines) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </motion.nav>
      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70 absolute top-0 left-0 w-full h-full flex justify-center items-center z-40">
          {/* List of links in the mobile menu */}
          <ul className="space-y-6 text-white text-2xl">
            {/* Each list item in the mobile menu has a hover effect */}
            <motion.li
              className="hover:text-blue-500 font-medium"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" onClick={toggleMenu}>
                {" "}
                {/* Close menu after clicking */}
                Home
              </Link>
            </motion.li>

            <motion.li
              className="hover:text-blue-500 font-medium"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/portfolio" onClick={toggleMenu}>
                Portfolio
              </Link>
            </motion.li>

            <motion.li
              className="hover:text-blue-500 font-medium"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/skills" onClick={toggleMenu}>
                Why Me
              </Link>
            </motion.li>

            <motion.li
              className="hover:text-blue-500 font-medium"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/contactme" onClick={toggleMenu}>
                Get In Touch
              </Link>
            </motion.li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;

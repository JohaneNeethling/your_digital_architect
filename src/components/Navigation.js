import { motion } from "framer-motion"; // Importing framer-motion for animation
import { Link } from "react-router-dom"; // Importing Link component for navigation
import { useState } from "react"; // Importing useState hook to manage component state

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu state
  };

  return (
    <div>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between bg-transparent backdrop-blur-lg z-50"
      >
        {/* Website Title */}
        <h2 className="text-4xl font-noto font-bold text-white">
          Your Digital Architect
        </h2>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white text-xl">
          {["Home", "Portfolio", "Why Me", "Get In Touch"].map(
            (item, index) => (
              <motion.li
                key={index}
                className="text-white hover:text-blue-500 font-medium"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/${item.toLowerCase().replace(/ /g, "")}`}>
                  {item}
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {isOpen && ( // Conditionally render the menu only when `isOpen` is true
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-40"
        >
          {["Home", "Portfolio", "Why Me", "Get In Touch"].map(
            (item, index) => (
              <motion.div
                key={index}
                className="text-2xl my-4"
                whileHover={{ scale: 1.1 }}
                onClick={toggleMenu} // Close menu on link click
              >
                <Link to={`/${item.toLowerCase().replace(/ /g, "")}`}>
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;

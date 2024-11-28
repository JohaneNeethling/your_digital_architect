import React from "react"; // Import React to use JSX syntax
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-white py-5">
      {" "}
      {/* Outer container for the footer */}
      {/* Background Animation: Using motion to animate a gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-600 opacity-50"
        animate={{
          scale: [1, 1.05, 1], // Scale animation (zoom in and out effect)
          opacity: [0.3, 0.6, 0.3], // Fade in and out effect
        }}
      ></motion.div>
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6">
        {" "}
        {/* Container for content */}
        {/* Footer Text with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in place
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} // Animation timing
          className="text-center mb-8"
        >
          <p className="text-lg mt-4 text-gray-300">
            &copy; 2024 Your Digital Architect. All rights reserved.{" "}
            {/* Footer copyright text */}
          </p>
        </motion.div>
        {/* Social Media Links with hover and tap animations */}
        <motion.div
          initial={{ opacity: 0 }} // Initial state: hidden
          animate={{ opacity: 1 }} // Final state: fully visible
          className="flex flex-wrap justify-center space-x-8 gap-4" // Flexbox layout for social links
        >
          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/johane-neethling-474179321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-2xl transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.2 }} // Increase size on hover
            whileTap={{ scale: 0.9 }} // Decrease size on tap
          >
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/JohaneNeethling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-2xl transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="https://www.instagram.com/johane_neethling/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-2xl transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </motion.a>

          {/* Portfolio Link */}
          <motion.a
            href="https://www.hyperiondev.com/portfolio/322818/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-xl transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-user-graduate"></i> {/* Portfolio icon */}
          </motion.a>

          {/* Certificate Link */}
          <motion.a
            href="https://www.hyperiondev.com/certificate/6025/certificate-of-completion?intent=view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-xl transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-file-alt"></i>{" "}
            {/* File icon for certificate */}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer; // Export Footer component to be used in other parts of the app

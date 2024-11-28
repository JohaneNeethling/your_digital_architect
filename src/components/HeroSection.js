import React, { useState, useEffect } from "react"; // Import React hooks and necessary modules
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import DynamicBG from "../assets/DynamicBG.gif"; // Import background image asset

const HeroSection = () => {
  // State to track mouse position for animations
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // State to manage the open/close state of the mobile menu (unused here, but likely for future use)
  const [isOpen, setIsOpen] = useState(false);

  // useEffect to track mouse movement and update mouse position for background and navbar animations
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY }); // Update mouse position on mouse move
    };

    window.addEventListener("mousemove", handleMouseMove); // Add event listener for mousemove
    return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup listener on component unmount
  }, []);

  // Function to toggle mobile menu open/close (not fully implemented here)
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden">
        {/* Dynamic animated background */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover" // Apply background cover
          style={{
            backgroundImage: `url(${DynamicBG})`, // Set dynamic background image
            opacity: 0.3, // Initial opacity
          }}
          animate={{
            scale: [1, 1.1, 1], // Animation to scale background
            opacity: [0.3, 0.5, 0.3], // Fade in/out effect for opacity
          }}
          transition={{
            duration: 10, // Animation duration
            repeat: Infinity, // Infinite loop for the animation
          }}
        ></motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity (hidden)
          animate={{ opacity: 1 }} // Animate to full opacity (visible)
          transition={{ duration: 1 }} // Duration of opacity transition
          className="absolute inset-0 flex flex-col text-center justify-center text-white dark:text-gray-200 px-4 sm:px-8 md:px-16"
        >
          {/* Building your text (with hover effect) */}
          <motion.p
            whileHover={{ scale: 1.1 }} // Scale the text up on hover
            transition={{ type: "spring", stiffness: 300 }} // Spring-based transition for smooth scaling
            className="text-lg sm:text-2xl md:text-4xl lg:text-6xl mt-4 tracking-widest"
          >
            BUILDING YOUR
          </motion.p>

          {/* Digital home text (with hover effect) */}
          <motion.h1
            whileHover={{ scale: 1.1 }} // Scale the text up on hover
            transition={{ type: "spring", stiffness: 300 }} // Spring-based transition for smooth scaling
            className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-noto tracking-widest font-extrabold text-blue-700"
          >
            DIGITAL HOME
          </motion.h1>

          {/* Together text (with hover effect) */}
          <motion.p
            whileHover={{ scale: 1.1 }} // Scale the text up on hover
            transition={{ type: "spring", stiffness: 300 }} // Spring-based transition for smooth scaling
            className="text-lg sm:text-2xl md:text-4xl lg:text-6xl mt-4 tracking-widest"
          >
            TOGETHER
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;

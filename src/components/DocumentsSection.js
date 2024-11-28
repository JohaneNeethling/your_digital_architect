import React from "react"; // Importing React library to work with JSX
import { motion } from "framer-motion"; // Importing motion from Framer Motion for animations
import BG2 from "../assets/BG2.gif"; // Importing a background image (GIF)

const DocumentsSection = () => {
  return (
    <div className="relative bg-black p-8 md:p-40 font-noto">
      {/* Outer container with black background and padding. The font used is 'noto' */}

      {/* Background Image Section */}
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-cover z-0" // Positioning background to cover the entire container
        style={{
          backgroundImage: `url(${BG2})`, // Setting the background image from imported GIF
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 80%)", // Creating a radial gradient mask to fade the image from center to edges
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0) 80%)", // Applying WebKit-specific mask for compatibility with Safari
          maskSize: "cover", // Ensuring the background covers the entire div
          WebkitMaskSize: "cover", // Safari compatibility
        }}
      ></motion.div>

      {/* Content Section */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Main content container with centered text and padding */}

        {/* Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -100 }} // Initial position and opacity for animation
          animate={{ opacity: 1, y: 0 }} // Final state of animation
          transition={{ duration: 1.5, ease: "easeInOut" }} // Animation duration and easing
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-widest text-white"
        >
          A Journey of Excellence
        </motion.h2>

        {/* Paragraph with animation */}
        <motion.p
          initial={{ opacity: 0 }} // Initial opacity for animation
          animate={{ opacity: 1 }} // Final opacity for animation
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} // Animation duration, delay, and easing
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 font-bold"
        >
          From the very first line of code to the final project, my journey at
          HyperionDev, South Africa's leading coding school, has been nothing
          short of remarkable. Graduating with a 99% average, I’ve proven that
          hard work, dedication, and passion can turn aspirations into reality.
          But don’t just take my word for it—take a peek at the proof below and
          see the results for yourself.
        </motion.p>

        {/* Action Links Section */}
        <motion.div
          className="flex flex-wrap justify-center mt-12 space-x-8 sm:space-x-8" // Container for action links with spacing
          initial={{ opacity: 0 }} // Initial opacity for animation
          animate={{ opacity: 1 }} // Final opacity for animation
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }} // Animation timing
        >
          {/* Report Card Link */}
          <motion.a
            href="https://www.hyperiondev.com/portfolio/322818/" // Link to the report card
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 hover:bg-indigo-700 text-white py-3 px-6 sm:px-8 rounded-lg text-lg font-semibold transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }} // Slightly scale up on hover
            whileTap={{ scale: 0.95 }} // Slightly scale down on tap (click)
          >
            View My Report Card
          </motion.a>

          {/* Certificate Link */}
          <motion.a
            href="https://www.hyperiondev.com/certificate/6025/certificate-of-completion?intent=view" // Link to the certificate
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 hover:bg-indigo-700 text-white py-3 px-6 sm:px-8 rounded-lg text-lg font-semibold transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }} // Hover scale animation
            whileTap={{ scale: 0.95 }} // Tap scale animation
          >
            View My Certificate
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentsSection;

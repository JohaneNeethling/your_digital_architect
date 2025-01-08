import React from "react"; // Import React library to use JSX and components
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import Johane from "../assets/JohaneNeethling.jpeg"; // Import image for profile picture
import BeeBG from "../assets/BeeBg.png"; // Import background image for the section

const BioSection = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24 text-white">
      {/* Main container with background color, full screen height, and centered content */}

      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:items-start pt-36">
        {/* Inner container for text and image, responsive flexbox layout */}

        <div className="text-center md:text-left md:mr-8">
          {/* Text container, centered on small screens, left-aligned on medium screens */}

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide  pt-6"
            initial={{ opacity: 0, y: -50 }} // Initial animation state for opacity and vertical position
            animate={{ opacity: 1, y: 0 }} // Animation state to make it visible and move to original position
            transition={{ duration: 1.5, delay: 0.3 }} // Animation duration and delay settings
          >
            hi there, I'm{" "}
            <span className="block text-blue-700 text-5xl md:text-7xl font-bold font-noto">
              Johane Neethling
            </span>
          </motion.h2>
          {/* Heading with animated entrance for the name */}

          <div className="flex flex-col mt-4">
            {/* Flex container for paragraph and image */}

            <motion.p
              className="text-lg sm:text-xl mt-4 font-noto "
              initial={{ opacity: 0, y: 20 }} // Initial state for animation (opacity and position)
              animate={{ opacity: 1, y: 0 }} // Animation to make it visible and bring it into place
              transition={{ duration: 1.5, delay: 0.9 }} // Duration and delay for the animation
            >
              As a passionate software developer, I graduated at the top of my
              class with a 99% grade average after being honored with a bursary
              to pursue my career. Today, I am a skilled full stack developer,
              proficient in both front-end and back-end technologies. With a
              strong foundation in problem-solving and innovative thinking, I
              specialize in creating seamless, user-centric digital solutions.
            </motion.p>
            {/* Bio paragraph with animated entrance */}

            <img
              src={BeeBG}
              alt="Bee"
              className="w-52 h-28 mt-4 ml-auto mr-20"
            />
            {/* Background image of a bee, placed on the right with margin */}
          </div>
        </div>

        <motion.div
          className="relative mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state of the image with scale effect
          animate={{ opacity: 1, scale: 1 }} // Animation to make the image visible and restore scale
          transition={{ duration: 1.5, delay: 0.5 }} // Duration and delay for the animation
        >
          <img
            src={Johane}
            alt="Johane Neethling"
            className="w-[80%] sm:w-[60%] md:w-[100%] h-auto object-cover rounded-full shadow-2xl ml-11"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 60%)", // Mask effect for smooth fade around the image
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 60%)", // Webkit support for mask effect
              maskSize: "cover", // Ensure the mask covers the image
              WebkitMaskSize: "cover", // Webkit support for mask size
            }}
          />
          {/* Profile picture with circular shape, shadow, and fade effect */}
        </motion.div>
      </div>
    </div>
  );
};

export default BioSection; // Export BioSection component

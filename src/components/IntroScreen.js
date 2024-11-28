import React from "react"; // Importing React library to build components
import { ReactTyped as Typed } from "react-typed"; // Importing the Typed component for typing animation
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation effects
import { useNavigate } from "react-router-dom"; // Importing useNavigate for programmatic navigation

// The IntroScreen component accepts an 'onComplete' prop, which is called when the animation completes
const IntroScreen = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAnimationComplete = () => {
    navigate("/"); // Navigate to the / route after animation completes
  };

  return (
    <motion.div
      // Initial state of the div (fully visible)
      initial={{ opacity: 1 }}
      // Animate to the end state (fade out the div)
      animate={{ opacity: 0 }}
      // Define the transition with a 4-second delay and 1-second duration for fading out
      transition={{ delay: 4, duration: 1 }}
      // Calls the handleAnimationComplete function once the animation finishes
      onAnimationComplete={handleAnimationComplete}
      // Styling for the div: center the content, set background color, and apply large text
      className="flex items-center justify-center min-h-screen bg-black text-white font-noto text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      <span className="text-white transition-colors duration-1000">
        {/* The Typed component will animate text typing */}
        <Typed
          strings={[
            "Your <span class='text-blue-700'>Digital</span> Architect", // Text with custom styling for 'Digital'
          ]}
          typeSpeed={50} // Speed of typing effect (50ms per character)
          backSpeed={30} // Speed of the backspace effect (30ms per character)
          loop={false} // Do not repeat the typing animation
          showCursor={false} // Hide the cursor during typing
          smartBackspace // Smart backspacing to avoid erasing unnecessary parts
        />
      </span>
    </motion.div>
  );
};

export default IntroScreen; // Export the component to be used in other parts of the app

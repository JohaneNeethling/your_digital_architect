import React, { useEffect } from "react";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const IntroScreen = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (onComplete) {
      onComplete(); // Trigger onComplete prop after animation
    }
  }, [onComplete]);

  const handleAnimationComplete = () => {
    navigate("/home"); // Navigate to home after animation
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1 }}
      onAnimationComplete={handleAnimationComplete}
      className="flex items-center justify-center min-h-screen bg-black text-white font-noto text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      <span className="text-white transition-colors duration-1000">
        <Typed
          strings={[
            "Your <span class='text-blue-700'>Digital</span> Architect",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
          showCursor={false}
          smartBackspace
        />
      </span>
    </motion.div>
  );
};

export default IntroScreen;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation
import NeetLogo from "../assets/NeetLogo1.png"; // Import project image assets
import JeanAndre from "../assets/JeanAndre.png";
import BoomBoxLogo from "../assets/BoomBoxLogo.png";
import Plans from "../assets/PlansBack.png";
import TLogo from "../assets/21Logo.png";
import BeeBG3 from "../assets/BeeBg3.png";

// Array of project objects, each with title, description, image, and link
const projects = [
  {
    title: "BoomBox",
    description:
      "Allows users to play audio, save media to a favorites list, and log in and out for a personalized experience. Featuring smooth animations, pagination for efficient navigation, and a dynamic design, the project demonstrates strong frontend and user authentication skills.",
    image: BoomBoxLogo,
    link: "https://boombox-1.onrender.com",
  },
  {
    title: "Yene van Jaarsveldt",
    description:
      "Built with React and styled using Tailwind CSS, features a project gallery, a blog system for updates, and a functional contact form. Its elegant design, smooth animations, and backend integration highlight a strong focus on user experience and functionality.",
    image: Plans,
    link: "https://yene-van-jaarsveldt.onrender.com",
  },
  {
    title: "Twenty One Magazine",
    description:
      "Features a fun, girly design and includes interactive elements like a quiz that displays results upon submission. It also incorporates a functional TikTok-style media player, showcasing strong UI design and interactive development skills.",
    image: TLogo,
    link: "https://twenty-one-magazine.onrender.com",
  },

  {
    title: "Neethling Ingenieurs",
    description:
      "Professional steel construction website features a clean design with a refined color palette, smooth animations, and transitions. Its concise layout and polished aesthetic highlight attention to detail and a focus on user experience.",
    image: NeetLogo,
    link: "https://neethling-ingenieurs-staal.onrender.com/",
  },
  {
    title: "Jean-Andre du Plessis",
    description:
      "Professional CV website features an advanced design with a sleek color palette and an intuitive layout. It includes a day and night mode for enhanced user experience, showcasing both design skills and attention to detail.",
    image: JeanAndre,
    link: "https://jean-andre-cv.onrender.com/",
  },
];

const PortfolioSection = () => {
  // State for managing menu open/close and mouse position
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect hook to track mouse movement and update position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener to update mouse position
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <div className="bg-black text-white py-16 px-6 sm:px-12 md:px-24 font-noto pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Heading for the Portfolio Section */}
          <motion.h2
            className="text-xl sm:text-8xl md:text-8xl font-extrabold font-noto mb-12 text-center text-blue-700 tracking-widest mt-7"
            initial={{ opacity: 0, y: -50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Final animation state
            transition={{ duration: 1 }} // Transition timing
          >
            BLUEPRINTS
          </motion.h2>

          {/* Paragraph describing the portfolio */}
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-center font-noto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }} // Animation with delay
          >
            Every masterpiece begins with a blueprint...
          </motion.p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 text-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }} // Animating each project with staggered delay
                whileHover={{ scale: 1.05 }} // Scale effect on hover
              >
                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
                  transition={{ duration: 0.5 }} // Duration for hover zoom effect
                />

                {/* Project Information Below Image */}
                <motion.div
                  className="p-4 sm:p-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }} // Animating content with delay
                >
                  <motion.h3
                    className="text-white mb-2 font-noto font-extrabold text-2xl sm:text-3xl border-b-2 border-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} // Smooth appearance transition
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-white font-noto font-bold text-base sm:text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }} // Smooth paragraph appearance
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 sm:px-6 sm:py-4 text-lg font-bold text-white bg-indigo-900 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-400 hover:shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }} // Button transition
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Background image of the bee */}
          <img
            src={BeeBG3}
            alt="Bee"
            className="w-40 sm:w-60 h-40 sm:h-60 mt-4 ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

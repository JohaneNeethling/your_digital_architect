import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation effects

// An array of skill objects, each containing a title and description
const skills = [
  {
    title: "Interface Development",
    description: (
      <>
        I have extensive experience in building interactive and scalable user
        interfaces using <strong className="text-blue-700">React</strong>, a
        powerful <strong className="text-blue-700">JavaScript</strong> library.
        By leveraging <strong className="text-blue-700">Tailwind CSS</strong>, I
        create custom, responsive designs that ensure an optimized user
        experience on all devices. I am proficient in using{" "}
        <strong className="text-blue-700">Grid and Flexbox</strong> layouts to
        construct flexible, mobile-first designs, ensuring that the application
        looks great and functions smoothly across various screen sizes and
        devices.
      </>
    ),
  },
  {
    title: "Application Logic Development",
    description: (
      <>
        On the backend, I use <strong className="text-blue-700">Node.js</strong>{" "}
        to develop efficient and scalable server-side applications, ensuring
        robust performance even under heavy traffic. I integrate{" "}
        <strong className="text-blue-700">MongoDB</strong> for NoSQL data
        storage, creating highly flexible and scalable databases. Additionally,
        I design and implement{" "}
        <strong className="text-blue-700">RESTful APIs</strong>, allowing smooth
        communication between the frontend and backend of applications,
        facilitating data exchange and enhancing overall functionality.
      </>
    ),
  },
  {
    title: "Mobile Compatibility",
    description: (
      <>
        I prioritize mobile-first design principles to ensure every project is
        fully mobile-responsive. By using modern CSS techniques and frameworks
        like <strong className="text-blue-700">Tailwind CSS</strong>, I create
        websites and applications that adapt seamlessly to all screen sizes,
        providing users with an optimal experience across desktops, tablets, and
        smartphones. My focus is on creating fluid, intuitive designs that make
        navigating on mobile devices as easy as on desktops.
      </>
    ),
  },
  {
    title: "UI/UX Design",
    description: (
      <>
        In addition to coding, I have a strong background in{" "}
        <strong className="text-blue-700">UI design</strong>, where I focus on
        crafting clean, modern, and user-friendly interfaces that enhance the
        user experience. I place a strong emphasis on{" "}
        <strong className="text-blue-700">UX strategy</strong>, ensuring that
        the applications I build are intuitive and easy to use. I use
        prototyping and wireframing tools to visualize the structure of the
        application and create interactive prototypes for client review,
        streamlining the design process and improving user interaction.
      </>
    ),
  },
  {
    title: "Version Control & Collaboration",
    description: (
      <>
        I am proficient in using{" "}
        <strong className="text-blue-700">GitHub</strong> for version control
        and collaboration. By leveraging{" "}
        <strong className="text-blue-700">Git</strong>, I can efficiently manage
        code, track changes, and ensure that the development process is smooth
        and well-documented. This allows me to collaborate effectively with
        teams, maintain clean code, and manage deployments, ensuring that the
        development workflow remains organized and efficient, even in larger,
        more complex projects.
      </>
    ),
  },
  {
    title: "Additional Skills",
    description: (
      <>
        In addition to my technical expertise, I offer{" "}
        <strong className="text-blue-700">
          copywriting and graphic design skills
        </strong>
        , which allow me to bring a creative touch to every project. I write
        clear, compelling copy that communicates effectively with the target
        audience while ensuring the brand's message is consistent across all
        platforms. My graphic design experience enables me to create custom
        visuals, logos, and branding elements that align with the overall
        aesthetic and functionality of the web applications I build.
      </>
    ),
  },
];

// SkillsSection component to render the skills section on the page
const SkillsSection = () => {
  return (
    <div className="bg-black py-16 px-6 sm:px-12 md:px-24 text-white">
      {" "}
      {/* Background and padding for the section */}
      <div className="max-w-6xl mx-auto text-center">
        {" "}
        {/* Centering content with max-width */}
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Loop through the skills array and render each skill */}
          {skills.map((skill, index) => (
            <motion.div
              key={index} // Each skill gets a unique key
              className="p-6 sm:p-8 shadow-xl hover:shadow-2xl transform transition-all hover:scale-105" // Styling and hover effects
              initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
              animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
              transition={{ duration: 1, delay: 0.2 * index }} // Transition effect with delay for staggered animation
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-4 pb-4 border-b-2 border-white" // Styling for the title
                initial={{ opacity: 0, x: -50 }} // Initial state: hidden and from left
                animate={{ opacity: 1, x: 0 }} // Animate to visible and normal position
                transition={{ duration: 1, delay: 0.3 }} // Transition effect for title
              >
                {skill.title} {/* Render the skill title */}
              </motion.h3>

              <motion.p
                className="text-base sm:text-lg leading-relaxed text-white" // Styling for the description text
                initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
                animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
                transition={{ duration: 1, delay: 0.5 }} // Transition effect for description with a delay
              >
                {skill.description} {/* Render the skill description */}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; // Export the component to use it elsewhere

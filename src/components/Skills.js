import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation effects
import { Link } from "react-router-dom"; // Importing Link component for navigation

// An array of skill objects, each containing a title and description
const skills = [
  {
    title: "Interface Development",
    description: (
      <>
        I have extensive experience in building interactive and scalable user
        interfaces using <strong className="text-custom-light">React</strong>, a
        powerful <strong className="text-custom-light">JavaScript</strong>{" "}
        library. By leveraging{" "}
        <strong className="text-custom-light">Tailwind CSS</strong>, I create
        custom, responsive designs that ensure an optimized user experience on
        all devices. I am proficient in using{" "}
        <strong className="text-custom-light">Grid and Flexbox</strong> layouts
        to construct flexible, mobile-first designs, ensuring that the
        application looks great and functions smoothly across various screen
        sizes and devices.
      </>
    ),
  },
  {
    title: "Application Logic Development",
    description: (
      <>
        On the backend, I use{" "}
        <strong className="text-custom-light">Node.js</strong> to develop
        efficient and scalable server-side applications, ensuring robust
        performance even under heavy traffic. I integrate{" "}
        <strong className="text-custom-light">MongoDB</strong> for NoSQL data
        storage, creating highly flexible and scalable databases. Additionally,
        I design and implement{" "}
        <strong className="text-custom-light">RESTful APIs</strong>, allowing
        smooth communication between the frontend and backend of applications,
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
        like <strong className="text-custom-light">Tailwind CSS</strong>, I
        create websites and applications that adapt seamlessly to all screen
        sizes, providing users with an optimal experience across desktops,
        tablets, and smartphones. My focus is on creating fluid, intuitive
        designs that make navigating on mobile devices as easy as on desktops.
      </>
    ),
  },
  {
    title: "UI/UX Design",
    description: (
      <>
        In addition to coding, I have a strong background in{" "}
        <strong className="text-custom-light">UI design</strong>, where I focus
        on crafting clean, modern, and user-friendly interfaces that enhance the
        user experience. I place a strong emphasis on{" "}
        <strong className="text-custom-light">UX strategy</strong>, ensuring
        that the applications I build are intuitive and easy to use. I use
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
        <strong className="text-custom-light">GitHub</strong> for version
        control and collaboration. By leveraging{" "}
        <strong className="text-custom-light">Git</strong>, I can efficiently
        manage code, track changes, and ensure that the development process is
        smooth and well-documented. This allows me to collaborate effectively
        with teams, maintain clean code, and manage deployments, ensuring that
        the development workflow remains organized and efficient, even in
        larger, more complex projects.
      </>
    ),
  },
  {
    title: "Logo Design",
    description: (
      <>
        Crafting unique, memorable{" "}
        <strong className="text-custom-light">logos</strong> that represent your
        brand’s{" "}
        <strong className="text-custom-light">identity and values</strong>,
        tailored to make a lasting impression in the market.
      </>
    ),
  },
  {
    title: "Advertising Graphics",
    description: (
      <>
        Designing eye-catching and effective advertising materials, such as
        <strong className="text-custom-light"> posters</strong>,{" "}
        <strong className="text-custom-light">banners</strong>,{" "}
        <strong className="text-custom-light">social media ads</strong>, and{" "}
        <strong className="text-custom-light">flyers</strong>, to engage your
        target audience and boost brand visibility.
      </>
    ),
  },
  {
    title: "Print Materials",
    description: (
      <>
        Designing
        <strong className="text-custom-light"> brochures</strong>,{" "}
        <strong className="text-custom-light">business cards</strong>,{" "}
        <strong className="text-custom-light">pamphlets</strong>, and{" "}
        <strong className="text-custom-light">other print collateral</strong>,
        that effectively communicate your message with a professional, polished
        look.
      </>
    ),
  },
  {
    title: "Social Media Graphics",
    description: (
      <>
        Designing tailored content for
        <strong className="text-custom-light">
          {" "}
          social media platforms
        </strong>{" "}
        from <strong className="text-custom-light">
          profile images
        </strong> to <strong className="text-custom-light">post designs</strong>{" "}
        to enhance your{" "}
        <strong className="text-custom-light">online presence</strong> and{" "}
        <strong className="text-custom-light">engagement</strong>.
      </>
    ),
  },
  {
    title: "Packaging Design",
    description: (
      <>
        Designing product packaging that
        <strong className="text-custom-light">
          {" "}
          stands out on the shelf
        </strong>{" "}
        and{" "}
        <strong className="text-custom-light">
          aligns with your brand
        </strong>{" "}
        ,ensuring that both{" "}
        <strong className="text-custom-light">functionality</strong>, and{" "}
        <strong className="text-custom-light">aesthetics</strong> are
        prioritized.
      </>
    ),
  },
  {
    title: "Illustrations & Icons",
    description: (
      <>
        Custom
        <strong className="text-custom-light"> illustrations</strong> and{" "}
        <strong className="text-custom-light">icons</strong> that add{" "}
        <strong className="text-custom-light">creativity</strong> and{" "}
        <strong className="text-custom-light">uniqueness</strong> to your
        project, whether for{" "}
        <strong className="text-custom-light">websites</strong>,{" "}
        <strong className="text-custom-light">apps</strong> or{" "}
        <strong className="text-custom-light">printed materials</strong>.
      </>
    ),
  },
];

// SkillsSection component to render the skills section on the page
const SkillsSection = () => {
  return (
    <div className="bg-custom-dark py-16 px-6 sm:px-12 md:px-24 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Website Development Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-right pt-20 text-custom-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Website Development
        </motion.h2>
        <motion.p
          className="text-xl sm:text-xl mt-4 pb-10 font-noto text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          I’m a skilled web developer specializing in creating dynamic,
          responsive websites using React, Node.js, and MongoDB. I focus on
          building seamless user experiences with intuitive designs and clean,
          maintainable code, ensuring optimal performance across all devices.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-10">
          {skills.slice(0, 5).map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 transform transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-4 pb-4 border-b-2 border-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {skill.title}
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg leading-relaxed text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        {/* Portfolio Button for Website Development */}
        <motion.div
          className="mt-6 flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        >
          <motion.a
            href="/development"
            className="bg-custom-light hover:bg-custom-dark border-custom-light border-2 text-white py-3 px-6 sm:px-8 rounded-lg text-lg font-semibold transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEE BLUEPRINTS
          </motion.a>
        </motion.div>

        {/* Graphic Design Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-left pt-40 text-custom-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Graphic Design & Copywriting
        </motion.h2>
        <motion.p
          className="text-xl sm:text-xl mt-4 pb-10 font-noto text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          I offer professional graphic design services, specializing in creating
          visually compelling branding, logos, and marketing materials. Using
          professional tools, I craft custom designs that effectively
          communicate your brand’s message and leave a lasting impact.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-10">
          {skills.slice(5).map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 transform transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-4 pb-4 border-b-2 border-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {skill.title}
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg leading-relaxed text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        {/* Portfolio Button for Graphic Design */}
        <motion.div
          className="mt-6 flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        >
          <motion.a
            href="/design"
            className="bg-custom-light hover:bg-custom-dark border-custom-light border-2 text-white py-3 px-6 sm:px-8 rounded-lg text-lg font-semibold transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEE BLUEPRINTS
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;

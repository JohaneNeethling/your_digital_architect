import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import BeeBG2 from "../assets/BeeBg2.png"; // Importing an image to be used in the section

const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* SAY HELLO Text at the top of the page */}
      <motion.div
        className="absolute top-0 w-full text-center text-6xl sm:text-8xl font-bold tracking-widest text-white whitespace-nowrap font-noto mt-16"
        animate={{
          x: ["100%", "-100%"], // animate from right to left
        }}
        transition={{
          duration: 20, // Slower scrolling (increase the duration for slower speed)
          ease: "linear", // constant speed
          repeat: Infinity, // repeat infinitely
        }}
      >
        {"SAY HELLO ".repeat(100)}{" "}
        {/* Repeating the text to create a long scrolling animation */}
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 sm:px-32 mt-10">
        {/* Contact Text Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <motion.p
            className="text-lg sm:text-2xl mt-4 font-noto"
            initial={{ opacity: 0, y: 20 }} // Initial animation properties (opacity and vertical position)
            animate={{ opacity: 1, y: 0 }} // Final animation properties (fully visible and at normal position)
            transition={{ duration: 1.5, delay: 0.9 }} // Controls the animation speed and delay
          >
            {/* Text content of the contact description */}I believe in the
            power of collaboration and creativity to build meaningful digital
            solutions. Whether you're looking to start a new project, enhance an
            existing one, or simply discuss ideas, I'm here to help. As a
            dedicated full-stack developer, I bring a combination of technical
            expertise and a user-centric approach to every project. Feel free to
            reach out—I’d love to learn more about your goals and how we can
            bring them to life together.
          </motion.p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center sm:ml-8 mt-8 sm:mt-0">
          <motion.form
            initial={{ opacity: 0, y: 50 }} // Form starts off invisible and slightly lower
            animate={{ opacity: 1, y: 0 }} // Form animates to full opacity and its normal position
            transition={{ duration: 1, delay: 0.2 }} // Controls the form's animation speed and delay
            className="space-y-6"
          >
            <div>
              {/* Input for Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
              />
            </div>

            <div>
              {/* Input for Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
              />
            </div>

            <div>
              {/* Textarea for Message */}
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0 }} // Starts invisible
              animate={{ opacity: 1 }} // Becomes fully visible
              transition={{ duration: 1, delay: 0.4 }} // Delay and duration for the animation
              type="submit"
              className="w-full py-4 mt-6 rounded-md font-noto text-white border-2 border-white text-xl font-semibold hover:text-blue-700 hover:border-blue-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
        <div className="mt-12 sm:mt-96">
          {/* Image of the bee, displayed with custom size and margins */}
          <img
            src={BeeBG2}
            alt="Bee"
            className="w-44 h-24 sm:w-52 sm:h-28 mr-auto sm:mt-96 sm:-mb-16"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

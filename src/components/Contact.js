import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS
import BeeBG2 from "../assets/BeeBg2.png";

const ContactSection = () => {
  const formRef = useRef(); // Reference to the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    emailjs
      .sendForm(
        "service_g8mimka",
        "template_jqx1kx9",
        formRef.current,
        "CIpOqlUdF4dfWwyxR"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden pt-11">
        <div className="relative w-full bg-black">
          <motion.div
            className="absolute top-0 w-full text-center text-6xl sm:text-8xl font-bold tracking-widest text-white whitespace-nowrap font-noto mt-16"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {"SAY HELLO ".repeat(100)}
          </motion.div>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 sm:px-32 mt-36">
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <motion.p
              className="text-lg sm:text-2xl mt-4 font-noto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              I believe in the power of{" "}
              <strong className="text-custom-light">
                collaboration and creativity
              </strong>{" "}
              to build meaningful digital solutions. Whether you're looking to
              start a <strong className="text-custom-light">new</strong>{" "}
              project, <strong className="text-custom-light">enhance</strong> an
              existing one, or simply{" "}
              <strong className="text-custom-light">discuss ideas</strong>, I'm
              here to help. As a dedicated full-stack developer, I bring a
              combination of{" "}
              <strong className="text-custom-light">technical expertise</strong>{" "}
              and a <strong className="text-custom-light">user-centric</strong>{" "}
              approach to every project. Feel free to reach out—I’d love to
              learn more about your goals and how we can bring them to life{" "}
              <strong className="text-custom-light">together</strong>.
            </motion.p>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-center sm:ml-8 mt-8 sm:mt-0">
            <motion.form
              ref={formRef} // Attach the form reference
              onSubmit={sendEmail} // Handle form submission
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-4 bg-transparent text-white border-b-2 focus:outline-none"
                  rows="4"
                  required
                />
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                type="submit"
                className="w-full py-4 mt-6 rounded-md font-noto text-white border-2 border-white text-xl font-semibold hover:text-custom-light hover:border-custom-light transition duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>

        <div className="absolute bottom-8 left-8">
          <img src={BeeBG2} alt="Bee" className="w-44 h-24 sm:w-52 sm:h-28" />
        </div>
      </div>
    </>
  );
};

export default ContactSection;

// Importing necessary modules and components
import { motion } from "framer-motion"; // For animations
import { useState } from "react"; // For managing component state

// Importing image assets for various portfolio items
// Each image corresponds to a specific portfolio section
import KampalaLogo from "../assets/graphicdesign/Kampala/Kampala_logo_.webp";
import Kampala1 from "../assets/graphicdesign/Kampala/Kampala Easter.png";
import Kampala2 from "../assets/graphicdesign/Kampala/Kampala's Valentine Dance.png";
import Kampala3 from "../assets/graphicdesign/Kampala/Kampala Ad.png";
import VredenhofLogo from "../assets/graphicdesign/Vredenhof/VredenhofLogo1.png";
import Vredenhof1 from "../assets/graphicdesign/Vredenhof/Wedding Ad Vredenhof.png";
import Vredenhof2 from "../assets/graphicdesign/Vredenhof/VredenhofLogo2.png";
import Vredenhof3 from "../assets/graphicdesign/Vredenhof/VredenhofLogo3.png";
import Vredenhof4 from "../assets/graphicdesign/Vredenhof/VredenhofLogo4.png";
import ClubhouseBistroLogo from "../assets/graphicdesign/Bistro/ClubhouseLogo.jpg";
import ClubhouseBistro1 from "../assets/graphicdesign/Bistro/Clubhouse Valentine's Dinner.png";
import NeethlingLogo from "../assets/graphicdesign/NeetDev/Neethling Development Logo With BG.png";
import Neethling1 from "../assets/graphicdesign/NeetDev/Neethling Development AD 1.png";
import Neethling2 from "../assets/graphicdesign/NeetDev/NeetDevAd2.png";
import Neethling3 from "../assets/graphicdesign/NeetDev/NeetGraphAd1.png";
import NeethlingIngLogo from "../assets/graphicdesign/NeethlingIngenieurs/NeetLogo1.png";
import NeethlingIng1 from "../assets/graphicdesign/NeethlingIngenieurs/1.png";
import NeethlingIng2 from "../assets/graphicdesign/NeethlingIngenieurs/2.png";
import NeethlingIng3 from "../assets/graphicdesign/NeethlingIngenieurs/3.png";
import NeethlingIng4 from "../assets/graphicdesign/NeethlingIngenieurs/4.png";
import NeethlingIng5 from "../assets/graphicdesign/NeethlingIngenieurs/5.png";
import NeethlingIng6 from "../assets/graphicdesign/NeethlingIngenieurs/6.png";
import NymphLogo from "../assets/graphicdesign/Nymph/Nymph Logo.png";
import Nymph1 from "../assets/graphicdesign/Nymph/Announcement.png";
import Nymph2 from "../assets/graphicdesign/Nymph/Thank You Note.png";
import Nymph3 from "../assets/graphicdesign/Nymph/Our Story.png";
import Nymph4 from "../assets/graphicdesign/Nymph/Why Us.png";
import Nymph5 from "../assets/graphicdesign/Nymph/Ex Thoughts.png";
import SpiritLogo from "../assets/graphicdesign/Spirit/Spirit.png";
import Spirit1 from "../assets/graphicdesign/Spirit/Q1.png";
import Spirit2 from "../assets/graphicdesign/Spirit/Q2.png";
import Spirit3 from "../assets/graphicdesign/Spirit/Q3.png";
import Spirit4 from "../assets/graphicdesign/Spirit/Q4.png";
import Spirit5 from "../assets/graphicdesign/Spirit/Spirit in Style Shop Banner.png";
import TwentyFirstLogo from "../assets/graphicdesign/TwentyFirst/J&D.png";
import TwentyFirst1 from "../assets/graphicdesign/TwentyFirst/Johane's 21st.png";
import TwentyFirst2 from "../assets/graphicdesign/TwentyFirst/Prys Lyste.png";
import TwentyFirst3 from "../assets/graphicdesign/TwentyFirst/Prizes.png";
import LiandriCV from "../assets/graphicdesign/Liandri/Liandri Neethling CV.png";
import LiandriCV2 from "../assets/graphicdesign/Liandri/Liandri's Cover Letter.png";
import JACV1 from "../assets/graphicdesign/JeanAndre/JA1.png";
import JACV2 from "../assets/graphicdesign/JeanAndre/JA2.png";
import JohaneLogo from "../assets/graphicdesign/Johane/Johane Neethling Development Resume Old.png";
import Johane1 from "../assets/graphicdesign/Johane/Johane Neethling Coding.png";
import BrainBal1 from "../assets/graphicdesign/BrainBalance/The Three Brains.png";
import LindiCV from "../assets/graphicdesign/Lindi/Lindi Neethling.png";

// Array containing portfolio item data
// Each object contains details about the portfolio item, including ID, title, description, image, and a gallery of images

const portfolioItems = [
  {
    id: 1,
    image: KampalaLogo,
    gallery: [Kampala1, Kampala2, Kampala3],
    description:
      "Kampala Farm is a stunning 444-hectare retreat located just 13 km from Bonnievale and 38 km from Swellendam. Offering pet-friendly, self-catering accommodation, the farm provides a peaceful escape surrounded by nature. Guests can enjoy a range of outdoor activities, including cycling and hiking, making it an ideal destination for adventure seekers and those looking to unwind in a picturesque setting.",
  },
  {
    id: 2,
    image: TwentyFirstLogo,
    gallery: [TwentyFirstLogo, TwentyFirst1, TwentyFirst2, TwentyFirst3],
    description:
      "A luxurious gold and black-themed 21st birthday celebration, designed to be both elegant and vibrant. The event features a carefully curated layout, incorporating festive décor, activity stations, and entertainment to create an unforgettable experience. From stylish aesthetics to interactive elements, every detail is planned to ensure a seamless blend of sophistication and fun.",
  },
  {
    id: 3,
    image: VredenhofLogo,
    gallery: [VredenhofLogo, Vredenhof1, Vredenhof2, Vredenhof3, Vredenhof4],
    description:
      "Vredenhof is a charming wedding and function venue set on a beautiful farm, perfect for couples seeking an authentic and rustic farm wedding experience. Surrounded by picturesque landscapes, the venue offers a warm and inviting atmosphere, with options for both intimate gatherings and larger celebrations. Vredenhof is ideal for couples who desire a blend of nature, elegance, and a genuine farm-style ambiance for their special day.",
  },
  {
    id: 4,
    image: ClubhouseBistroLogo,
    gallery: [ClubhouseBistro1],
    description:
      "Clubhouse Bistro is a cozy and inviting restaurant located at the Bonnievale Golf Club. Offering a relaxed atmosphere with a view of the scenic course, it’s the perfect spot to enjoy delicious meals, whether you're winding down after a round of golf or just seeking a casual dining experience. With a menu that caters to a variety of tastes, the Clubhouse Bistro is known for its welcoming service and beautiful surroundings.",
  },
  {
    id: 5,
    image: NeethlingLogo,
    gallery: [NeethlingLogo, Neethling1, Neethling2, Neethling3],
    description:
      "Neethling Development is a dynamic website development and graphic design company, specializing in creating visually stunning and user-friendly websites. The team focuses on delivering custom-designed solutions tailored to each client's needs, ensuring a seamless digital experience. In addition to web development, Neethling Development offers expert graphic design services, creating impactful visual identities and marketing materials that resonate with audiences. Whether you need a fresh website or a brand redesign, Neethling Development is dedicated to bringing your vision to life.",
  },

  {
    id: 6,
    image: LiandriCV,
    gallery: [LiandriCV, LiandriCV2],
    description:
      "Liandri Neethling is a motivated and dedicated 20-year-old with a strong passion for learning and professional growth. Through a combination of academic achievements, hands-on experiences, and a natural ability to adapt quickly, she is ready to take on new challenges and contribute effectively to any team or organization. Her determination, creativity, and enthusiasm make her a promising candidate for opportunities that allow for personal and professional development.",
  },
  {
    id: 7,
    image: JACV1,
    gallery: [JACV1, JACV2],
    description:
      "Jean-André du Plessis is a 26-year-old professional with a diverse skill set and a passion for construction. With several years of experience in the building industry, Jean-André has honed a strong ability to manage projects, collaborate with teams and solve complex problems. He is committed to continuous learning and personal growth, always seeking new opportunities to expand his expertise and contribute meaningfully to any organization. Known for his reliability, creativity, and dedication, Jean-André is an ideal candidate for roles that offer both challenge and growth potential.",
  },
  {
    id: 8,
    image: JohaneLogo,
    gallery: [JohaneLogo, Johane1],
    description:
      "Johane Neethling is a 22-year-old website developer with a strong passion for coding, design, and creating seamless user experiences. With expertise in HTML, TailwindCSS, JavaScript & React, Johane has developed a keen eye for detail and a drive to build responsive and visually appealing websites. She is eager to continue expanding her knowledge and skills, seeking opportunities to contribute to innovative web projects. Known for her problem-solving abilities, adaptability, and collaborative approach, Johane is well-equipped to excel in dynamic development environments.",
  },
  {
    id: 9,
    image: LindiCV,
    gallery: [LindiCV],
    description:
      "Lindi Neethling is a seasoned professional with 22 years of experience in administrative roles, bringing a wealth of knowledge and expertise in office management, organization, and client relations. With a strong attention to detail, Lindi excels at managing schedules, coordinating teams, and streamlining office operations to enhance productivity. Her extensive background in administration has equipped her with excellent communication skills, problem-solving abilities, and a proactive approach to managing day-to-day tasks. Lindi is committed to maintaining efficiency and providing exceptional support, making her a valuable asset to any organization.",
  },
  {
    id: 10,
    image: SpiritLogo,
    gallery: [SpiritLogo, Spirit1, Spirit2, Spirit3, Spirit4, Spirit5],
    description:
      "Spirit in Style is a Christian shop on Etsy, offering a variety of digital content designed to inspire and uplift. From spiritually enriching books and workbooks to faith-based wallpapers, the shop provides tools that support and enhance your walk with God. Each product is thoughtfully crafted to encourage personal growth, reflection, and a deeper connection to faith. Whether you’re seeking resources for Bible study, spiritual inspiration, or to adorn your digital space with faith-based reminders, Spirit in Style offers a collection to help you stay grounded in your beliefs.",
  },
  {
    id: 11,
    image: NymphLogo,
    gallery: [NymphLogo, Nymph1, Nymph2, Nymph3, Nymph4, Nymph5],
    description:
      "Nymph Neverland is an enchanting tarot and spiritual shop on Etsy, offering personalized tarot readings and digital spiritual resources. Specializing in providing intuitive guidance through tarot, as well as a range of downloadable tools like guided meditations, spiritual worksheets, and tarot spreads, Nymph Neverland supports individuals on their spiritual journey. Whether you're seeking insight into life's questions or exploring new spiritual practices, Nymph Neverland offers a serene, digital space to connect with your higher self and grow spiritually.",
  },

  {
    id: 12,
    image: NeethlingIngLogo,
    gallery: [
      NeethlingIngLogo,
      NeethlingIng1,
      NeethlingIng2,
      NeethlingIng3,
      NeethlingIng4,
      NeethlingIng5,
      NeethlingIng6,
    ],
    description:
      "Neethling Ingenieurs is a well-established steel construction company with over 40 years of experience, proudly serving the Boland and Overberg regions. Specializing in custom steel structures, the company offers a wide range of services, from design and fabrication to installation, ensuring high-quality and durable solutions for both residential and commercial projects. With decades of expertise and a reputation for excellence, Neethling Ingenieurs continues to be a trusted name in the steel construction industry, delivering reliable and innovative solutions to meet the unique needs of their clients.",
  },
  {
    id: 13,
    image: BrainBal1,
    gallery: [BrainBal1],
    description:
      "Brain Balance is an Instagram page dedicated to promoting mental health awareness and providing support for those navigating their mental well-being journey. With a focus on self-care, mindfulness, and coping strategies, Brain Balance offers valuable resources, tips, and encouragement to help individuals maintain mental clarity and emotional balance. The page fosters a positive, inclusive space where followers can find inspiration and tools to prioritize their mental health, reduce stigma, and cultivate a supportive community.",
  },
];

// Portfolio component
const Portfolio = () => {
  // State to track the currently selected portfolio item
  const [selectedItem, setSelectedItem] = useState(null);

  // State to track the currently selected image for fullscreen view
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle when a portfolio item is clicked
  const handleClick = (item) => {
    setSelectedItem(item); // Set the selected item to display in a modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedItem(null); // Reset selected item
    setSelectedImage(null); // Reset selected image
  };

  // Function to handle when an image in the gallery is clicked
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image for fullscreen view
  };

  // Function to close the fullscreen view
  const handleCloseFullscreen = () => {
    setSelectedImage(null); // Reset selected image
  };

  return (
    <section className="bg-custom-dark text-white py-16 px-6 sm:px-12 md:px-24 font-noto pt-28">
      {/* Portfolio header with animation */}
      <motion.h2
        className="text-xl sm:text-8xl md:text-8xl font-extrabold font-noto mb-12 text-center text-custom-light tracking-widest mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Graphic Design Blueprints
      </motion.h2>

      {/* Introductory text with animation */}
      <motion.h4
        className="mt-4 mb-36 text-lg sm:text-xl md:text-2xl leading-relaxed text-center font-noto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        each project is a carefully crafted blueprint. I approach graphic design
        with precision and creativity, ensuring every piece is both visually
        striking and purposeful. Below, you’ll find a collection of designs
        created for my clients. By clicking the button, you can explore the
        unique designs I've developed for each, showcasing my ability to create
        tailored, impactful visuals that communicate their message clearly.
      </motion.h4>

      {/* Portfolio grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Portfolio item container */}
            <div className="flex flex-col items-center">
              {/* Portfolio item image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 text-center text-white">{item.description}</p>
              {/* Button placed beneath the image */}
              <button
                onClick={() => handleClick(item)}
                className="mt-4 px-4 py-2 bg-custom-light text-white rounded text-sm sm:text-base"
              >
                SEE MY DESIGNS
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing gallery of selected portfolio item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-custom-light p-8 rounded-lg relative w-full max-w-4xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-5xl text-black font-extrabold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-semibold mb-4">
              {selectedItem.title}
            </h3>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[500px]">
              {selectedItem.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-custom-dark p-2 rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={handleCloseFullscreen}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 text-4xl text-white font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

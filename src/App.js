import React, { useState, useEffect } from "react"; // Import necessary hooks from React
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Router components for navigation
import Navigation from "./components/Navigation"; // Navigation component for header
import HeroSection from "./components/HeroSection"; // Hero section of the page
import BioSection from "./components/BioSection"; // Biography section
import SkillsSection from "./components/Skills"; // Skills section
import PortfolioSection from "./components/Portfolio"; // Portfolio section
import Contact from "./components/Contact"; // Contact section
import bee from "./assets/Bee.png"; // Bee image asset used for custom cursor
import Footer from "./components/Footer"; // Footer component
import DocumentsSection from "./components/DocumentsSection"; // Section for documents

const App = () => {
  // State hooks for various features
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Tracks the current mouse position
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  }); // Tracks the previous mouse position to detect movement direction
  const [beePosition, setBeePosition] = useState({ x: 0, y: 0 }); // Position of the bee cursor
  const [isFlipped, setIsFlipped] = useState(false); // Whether the bee cursor is flipped horizontally

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const currentMousePosition = { x: e.clientX, y: e.clientY }; // Get the current mouse position

    // Determine if the mouse is moving left or right, and flip the bee accordingly
    if (currentMousePosition.x < previousMousePosition.x) {
      setIsFlipped(true); // Flip the bee if moving left
    } else if (currentMousePosition.x > previousMousePosition.x) {
      setIsFlipped(false); // Reset flip if moving right
    }

    // Update the state with the new mouse position
    setPreviousMousePosition(currentMousePosition);
    setMousePosition(currentMousePosition);
  };

  // UseEffect hook to update bee's position smoothly
  useEffect(() => {
    const moveBee = () => {
      const offsetX = mousePosition.x - beePosition.x; // Calculate the horizontal offset
      const offsetY = mousePosition.y - beePosition.y; // Calculate the vertical offset

      // New position of the bee with a smoothing factor (0.05)
      const newBeePosition = {
        x: beePosition.x + offsetX * 0.05,
        y: beePosition.y + offsetY * 0.05,
      };

      setBeePosition(newBeePosition); // Update the bee's position
    };

    // Update the bee's position every 16 milliseconds (60 FPS)
    const interval = setInterval(moveBee, 16);

    // Cleanup the interval when the component is unmounted or dependencies change
    return () => clearInterval(interval);
  }, [mousePosition, beePosition]);

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Custom Animated Bee Cursor */}
      <div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${beePosition.x - 30}px`,
          top: `${beePosition.y - 30}px`,
          transition: "transform 0.1s ease",
        }}
      >
        <img
          src={bee}
          alt="Bee"
          className="w-11 h-11 transform"
          style={{
            transform: `scale(${Math.random() * 0.5 + 1.2}) rotate(${
              Math.random() * 30 - 15
            }deg) ${isFlipped ? "scaleX(-1)" : ""}`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      {/* Router Setup for page navigation */}
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Navigation />
                <HeroSection />
                <BioSection />
                <SkillsSection />
                <DocumentsSection />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/whyme"
            element={
              <>
                <Navigation />
                <BioSection />
                <SkillsSection />
                <DocumentsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <Navigation />
                <PortfolioSection />
                <DocumentsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/getintouch"
            element={
              <>
                <Navigation />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Default Route Redirect to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App; // Export the App component as default for use in other parts of the application

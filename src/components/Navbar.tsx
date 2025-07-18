// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
// import logo2 from "../assets/images/ayna.png"
import logo from "../assets/images/ayna-white.png";

import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

interface navType {
  name: string;
  to: string;
  isSection: boolean;
}
// Helper for smooth scrolling to sections
const scrollToSection = (id: string, onScrolled?: () => void) => {
  console.log(`Attempting to scroll to: #${id}`);
  const element = document.getElementById(id);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      console.log(`Scrolled to element:`, element);
      if (onScrolled) {
        onScrolled(); // Callback after scroll attempt
      }
    }, 100); // 100ms delay, crucial for mobile and layout changes
  } else {
    console.warn(`Element with ID "${id}" not found for scrolling.`);
    if (onScrolled) {
      onScrolled(); // Still call onScrolled to close menu even if element not found
    }
  }
};

// Navigation links data
const mainNavLinks: navType[] = [
  { name: "Home", to: "", isSection: false }, // Ensure this ID matches your Hero section's wrapper
  { name: "About Us", to: "about", isSection: false },
  { name: "Our Solutions", to: "services", isSection: false },
  { name: "Brief", to: "brief", isSection: false },


  // { name: 'Contact', to: 'contact', isSection: false },
];

// const navLinks = isProduction() ? [] : mainNavLinks;
const navLinks = mainNavLinks;


// Animation variants for links (optional, can be done with Tailwind hover too)
const linkVariants = {
  hover: { scale: 1.05, y: -1, color: "var(#FFC71F)" }, // Use CSS var or fallback
  tap: { scale: 0.95 },
};

const navContainerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // To detect if we are on the homepage
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change if not a section scroll on the same page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMobileLinkClick = (sectionId: string) => {
    // Close menu optimistically, scroll will happen after a delay
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      // If not on homepage, navigate to homepage then scroll
      // This requires more complex logic or assumes links are only for homepage sections
      // For simplicity here, we'll just attempt scroll if on homepage
      console.warn(
        "Scroll to section only works on the homepage for this basic setup."
      );
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ease-in-out`;
  const scrolledClasses = "bg-data-dark-bg py-3 text-brand-dark"; // Dark text on white bg
  const transparentClasses = "bg-transparent py-5 text-white"; // White text on transparent bg

  return (
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className={`${navClasses} ${
        isScrolled || isMobileMenuOpen ? scrolledClasses : transparentClasses
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <RouterLink
          to="/"
          className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 
                        ${
                          isScrolled || isMobileMenuOpen
                            ? "text-data-highlight-text"
                            : "text-data-text-main hover:text-data-accent"
                        }`}
          onClick={() =>
            isHomePage
              ? scrollToSection("hero-section", () =>
                  setIsMobileMenuOpen(false)
                )
              : setIsMobileMenuOpen(false)
          }
        >
          <img src={logo} title="ayna logo" className="h-[35px]" />
        </RouterLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) =>
            link.isSection && isHomePage ? (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.to)}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className={`font-medium transition-colors duration-200 text-sm text-data-text-main lg:text-base 
                            ${
                              isScrolled || isMobileMenuOpen
                                ? "text-data-text-main hover:text-brand-yellow"
                                : "text-data-text-main hover:text-brand-yellow"
                            }`}
              >
                {link.name}
              </motion.button>
            ) : (
              <RouterLink
                key={link.name}
                to={
                  link.isSection && isHomePage
                    ? `#${link.to}`
                    : link.isSection
                    ? `/#${link.to}`
                    : link.to
                }
                onClick={() => {
                  if (link.isSection && isHomePage) scrollToSection(link.to);
                  // If not on homepage but it's a section link, navigate then scroll is more complex
                }}
              >
                 <motion.span
    variants={linkVariants}
    className={`font-medium  duration-500 text-lg transition-all  ${
      location.pathname === `/${link.to}` ? "bg-brand-yellow p-4 text-data-dark-bg " : "text-data-text-main hover:text-brand-yellow"
    } rounded-full  lg:text-base `}
  >
    {link.name}
  </motion.span>
              </RouterLink>
            )
          )}

          <Button
            label="Contact Us"
            backgroundColor={` ${isContactPage ? "bg-brand-yellow" : "bg-data-text-main"} `}

            onClick={() => navigate("/contact")}
            size="sm"
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          {navLinks.length > 0 && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none p-1 rounded 
                        ${
                          isScrolled || isMobileMenuOpen
                            ? "text-data-text-main hover:text-brand-accent"
                            : "text-data-text-main hover:text-brand-accent"
                        }`}
              // aria-label="Toggle menu"
              // aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          )}

          {/* <Button label='Reach Out Now' onClick={() => navigate("/contact")}  iconOnly/> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false} // No initial animation, controlled by animate prop
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }} // Custom ease for smoother open/close
        className={`md:hidden overflow-hidden ${
          isScrolled || isMobileMenuOpen
            ? "bg-data-dark-bg shadow-md"
            : "bg-black/30 backdrop-blur-md"
        }`} // Darker transparent bg for mobile
      >
        <div className="flex flex-col items-center py-5 space-y-5">
          {navLinks.map((link) =>
            link.isSection && isHomePage ? (
              <button
                key={link.name}
                onClick={() => handleMobileLinkClick(link.to)}
                className={`font-medium text-lg transition-colors duration-200 
                            ${
                              isScrolled || isMobileMenuOpen
                                ? "text-text-main hover:text-primary"
                                : "text-white hover:text-gray-200"
                            }`}
              >
                {link.name}
              </button>
            ) : (
              <RouterLink
                key={link.name}
                to={
                  link.isSection && isHomePage
                    ? `#${link.to}`
                    : link.isSection
                    ? `/#${link.to}`
                    : link.to
                }
                onClick={() => {
                  if (link.isSection && isHomePage) {
                    handleMobileLinkClick(link.to);
                  } else {
                    setIsMobileMenuOpen(false); // Just close menu if it's a regular link
                  }
                }}
              >
                <span
                  className={`font-medium text-lg transition-colors duration-200 
                                ${
      location.pathname === `/${link.to}` ? "bg-brand-yellow p-4 text-data-dark-bg " : "text-data-text-main hover:text-brand-yellow"
    } rounded-full`}
                >
                  {link.name}
                </span>
              </RouterLink>
            )
          )}
          <Button
            label="Contact Us"
            onClick={() => navigate("/contact")}
            size="sm"
          />
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;

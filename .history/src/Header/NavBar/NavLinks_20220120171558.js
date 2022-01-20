import React from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
function NavLinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#home">Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#aboutMe">About Me</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#myProjects">My Projects</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#contactMe">Contact Me</a>
      </motion.li>
    </ul>
  );
}
export { NavLinks };

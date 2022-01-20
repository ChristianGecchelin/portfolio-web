import React from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
function NavLinks(props) {
  return (
    <ul>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#home">Home</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#aboutMe">About Me</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#myProjects">My Projects</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contactMe">Contact Me</a>
      </motion.li>
    </ul>
  );
}
export { NavLinks };

import React from "react";
import "./NavBar.css";
function NavLinks(props) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#home">Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#aboutMe">About Me</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#myProjects">My Projects</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contactMe">Contact Me</a>
      </li>
    </ul>
  );
}
export { NavLinks };

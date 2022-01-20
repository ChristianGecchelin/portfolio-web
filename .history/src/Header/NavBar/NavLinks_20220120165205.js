import React from "react";
import "./NavBar.css";
function NavLinks(props) {
  return (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#aboutMe">About Me</a>
      </li>
      <li>
        <a href="#myProjects">My Projects</a>
      </li>
      <li>
        <a href="#contactMe">Contact Me</a>
      </li>
    </ul>
  );
}
export { NavLinks };

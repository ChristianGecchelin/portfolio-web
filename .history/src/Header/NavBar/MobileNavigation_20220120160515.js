import React from "react";
import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
function MobileNavigation() {
  return (
    <nav className="MobileNavigation">
      <TiThMenu
        className="hamburguer"
        onClick={() => console.log("you clicked")}
      />
      <NavLinks />
    </nav>
  );
}
export { MobileNavigation };

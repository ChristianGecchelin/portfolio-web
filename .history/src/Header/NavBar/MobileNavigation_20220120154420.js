import React from "react";
import "./NavBar.css";
import { NavLinks } from "./NavLinks";
function MobileNavigation() {
  return (
    <nav className="MobileNavigation">
      <NavLinks />
    </nav>
  );
}
export { MobileNavigation };

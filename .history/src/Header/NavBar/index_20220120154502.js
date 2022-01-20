import React from "react";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="NavBar">
      <MobileNavigation />
      <Navigation />
    </div>
  );
}
export { NavBar };

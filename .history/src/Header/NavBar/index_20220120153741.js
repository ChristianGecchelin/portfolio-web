import React from "react";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
function NavBar() {
  return (
    <div>
      <MobileNavigation />
      <Navigation />
    </div>
  );
}
export { NavBar };

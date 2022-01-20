import React, { useState } from "react";
import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="MobileNavigation">
      <TiThMenu className="hamburguer" onClick={() => setOpen(!open)} />
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
export { MobileNavigation };

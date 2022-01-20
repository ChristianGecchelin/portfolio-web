import React from "react";
import { NavBar } from "./NavBar";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>
        Portfo<span>lio</span>
      </h1>
      <NavBar />
    </header>
  );
}
export { Header };

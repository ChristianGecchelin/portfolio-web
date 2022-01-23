import React from "react";
import { Header } from "../Header/Index.js";
import { Home } from "../Home/Index.js";
import { AboutMe } from "../AboutMe/index.js";
import { MyProjects } from "../MyProjects/index.js";
import { ContactMe } from "../ContactMe/index.js";
import "./App.css";

function AppUI() {
  return (
    <>
      <Header />
      <Home id="id" />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </>
  );
}
export { AppUI };

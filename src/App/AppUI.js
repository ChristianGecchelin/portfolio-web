import React from "react";
import { Header } from "../Header/Index.js";
import { Home } from "../Home/Index.js";
import { AboutMe } from "../AboutMe/index.js";
import { MyProjects } from "../MyProjects/index.js";
import "./App.css";

function AppUI() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
    </>
  );
}
export { AppUI };

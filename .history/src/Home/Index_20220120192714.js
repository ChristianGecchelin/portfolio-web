import React from "react";
import "./Home.css";
function Home() {
  return (
    <section className="Home-container">
      <div className="text-container">
        <p className="first-lineText">Hi, my name is</p>
        <p>Christian</p>
        <p>I am a Front-end developer</p>
      </div>
      <button>Contact Me</button>
    </section>
  );
}
export { Home };

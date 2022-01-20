import React from "react";
import "./Home.css";
function Home() {
  return (
    <section className="Home-container">
      <div className="text-container">
        <p className="first-lineText">Hi, my name is</p>
        <p className="principal-lineText">Christian Gecchelin</p>
        <p className="secondary-lineText">
          I am a
          <div className="span-container">
            <span data-text="Developer">Developer__ </span>
          </div>
        </p>
      </div>
      <button>Contact Me</button>
    </section>
  );
}
export { Home };

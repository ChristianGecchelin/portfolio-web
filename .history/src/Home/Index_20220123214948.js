import React from "react";
import "./Home.css";
function Home(props) {
  return (
    <section className="Home-container" id="home">
      <div className="text-container">
        <p className="first-lineText">Hi, my name is</p>
        <p className="principal-lineText">Christian Gecchelin</p>
        <p className="secondary-lineText">I am a</p>
        <div className="span-container">
          <span data-text="Developer">Developer </span>
        </div>
      </div>
      <a>
        <button type="button" className="contact-button">
          Contact Me
        </button>
      </a>
    </section>
  );
}
export { Home };

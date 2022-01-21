import React from "react";
import "./AboutMe.css";
import profile from "../Assets/profile.jpg";
function AboutMe() {
  return (
    <section className="AboutMe-container">
      <div className="image-container">
        <img
          className="image"
          src={profile}
          alt="Christian Gecchelin"
          title="Christian Gecchelin"
        ></img>
      </div>
      <div className="information-container">
        <p className="">
          Hi I'm Christian, I am a ReactJs junior developer. You can see all my
          projects in the next slide. I have project based on frontEnd
          technologies like HTML5, CSS3, vanilla JavaScript and also ReactJs.
          I'm looking for my first professional experience as an employee.
        </p>
        <button>Curriculum</button>
      </div>
    </section>
  );
}
export { AboutMe };

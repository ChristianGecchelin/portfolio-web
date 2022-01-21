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
        <p className="">Lorem ipsum</p>
        <button>Curriculum</button>
      </div>
    </section>
  );
}
export { AboutMe };

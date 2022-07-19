import React from "react";
import "./AboutMe.css";
import profile from "../Assets/profile.jpg";
import resume from "../Assets/resume.pdf";
function AboutMe() {
  return (
    <section className="AboutMe-container" id="about">
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
          Hello, my name is Christian and I work as a ReactJs junior developer.
          I was born in Argentina, but I currently reside in Barcelona. I
          consider myself a technology enthusiast who appreciates taking on new
          challenges and expanding my knowledge.
        </p>
        <p>
          The following slide has a list of all of my projects. All of them are
          made with front-end technologies like HTML5, CSS3, vanilla JavaScript,
          NodeJs, MongoDB and ReactJs. I am looking for new career options and
          hope to speak with you soon. Please use the form below to contact me.
        </p>
        <a href={resume} target="_blank" rel="noreferrer noopener">
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}
export { AboutMe };

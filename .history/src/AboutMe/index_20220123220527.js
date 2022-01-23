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
          Hi I'm Christian and I am a <b>ReactJs</b> junior developer. I was
          born in Argentina but I'm living in Barcelona at the moment. If I have
          to define me, I would consider myself as an enthusiast of
          technologies, who likes the challenges and learn about a lot of
          different things.
        </p>
        <p>
          You can see all my projects in the next slide, there you can see that
          I have project based on frontEnd technologies like HTML5, CSS3,
          vanilla JavaScript as well as ReactJs. Furthermore I'm looking for my
          first professional experience as an employee.
        </p>
        <a href={resume} target="_blank" rel="noreferrer noopener">
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}
export { AboutMe };

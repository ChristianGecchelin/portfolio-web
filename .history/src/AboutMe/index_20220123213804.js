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
          Hi I'm Christian and I am a <b>ReactJs</b> junior developer. I'm from
          Argentina but I'm living in Barcelona at the moment. I consider myself
          as an enthusiast of technologies, who likes the challenges and learn
          about a lot of different things.
        </p>
        <p>
          You can see all my projects in the next slide, there you can see that
          I have project based on frontEnd technologies like HTML5, CSS3,
          vanilla JavaScript as well as ReactJs. Furthermore I'm looking for my
          first professional experience as an employee.
        </p>

        <button>
          <a href="../Assets/resume.pdf">Resume</a>
        </button>
      </div>
    </section>
  );
}
export { AboutMe };

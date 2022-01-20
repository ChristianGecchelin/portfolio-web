import React from "react";
import "./AboutMe.css";
import profile from "../Assets/profile.jpg";
function AboutMe() {
  return (
    <section className="AboutMe-container">
      <div>
        <img
          src={profile}
          alt="Christian Gecchelin"
          title="Christian Gecchelin"
        ></img>
      </div>
      <div>
        <p></p>
        <button>Curriculum</button>
      </div>
    </section>
  );
}
export { AboutMe };

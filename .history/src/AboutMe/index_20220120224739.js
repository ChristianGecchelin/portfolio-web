import React from "react";
import "./AboutMe.css";
import profile from "../Assets/profile.jpg";
function AboutMe() {
  return (
    <section>
      <div>
        <img
          src="../Assets/profile.jpg"
          alt="Christian Gecchelin"
          title="Christian Gecchelin"
        ></img>
      </div>
      <div>
        <p></p>
      </div>
      <button>Curriculum</button>
    </section>
  );
}
export { AboutMe };
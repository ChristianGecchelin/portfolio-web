import React from "react";
import { Axios } from "axios";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "./ContactMe.css";
function ContactMe() {
  return (
    <section className="ContactMe-container">
      <div className="form-container">
        <form>
          <div className="form-section-container">
            <label>Name</label>
            <input type={"text"}></input>
          </div>
          <div className="form-section-container">
            <label>E-mail</label>
            <input type={"email"}></input>
          </div>
          <div className="form-section-container xl">
            <label>Message</label>
            <textarea placeholder="Write your message here please"></textarea>
          </div>
        </form>
      </div>
      <div className="socialNetwork-container">
        <div className="card-container">
          <a href="https://github.com/ChristianGecchelin">
            <BsGithub />
          </a>
        </div>
        <div className="card-container">
          <a href="https://www.linkedin.com/in/christiangecchelin/">
            <BsLinkedin />
          </a>
        </div>
        <div className="card-container">
          <a href="https://twitter.com/ChristianGecche">
            <BsTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
export { ContactMe };

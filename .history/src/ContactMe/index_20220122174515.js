import React from "react";
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
          <a>
            <BsGithub width="400px" height="400px" />
          </a>
        </div>
        <div className="card-container">
          <BsLinkedin />
        </div>
        <div className="card-container">
          <BsTwitter />
        </div>
      </div>
    </section>
  );
}
export { ContactMe };

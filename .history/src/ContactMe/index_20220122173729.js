import React from "react";
import { BsGithub } from "react-icons/bs";
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
          <BsGithub />
        </div>
        <div className="card-container">
          <img></img>
        </div>
        <div className="card-container">
          <img></img>
        </div>
      </div>
    </section>
  );
}
export { ContactMe };

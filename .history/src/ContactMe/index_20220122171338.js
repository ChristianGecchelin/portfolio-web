import React from "react";
import "./ContactMe.css";
function ContactMe() {
  return (
    <section className="ContactMe-container">
      <div className="form-container">
        <form>
          <div>
            <label>Name</label>
            <input type={"text"}></input>
          </div>
          <label>E-mail</label>
          <input type={"email"}></input>
          <label>Message</label>
          <textarea placeholder="Write your message here please"></textarea>
        </form>
      </div>
      <div className="socialNetwork-container">
        <div className="card-container">
          <img></img>
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

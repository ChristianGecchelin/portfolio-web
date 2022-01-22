import React from "react";
import "./ContactMe.css";
function ContactMe() {
  return (
    <section className="ContactMe-container">
      <div className="form-container">
        <form>
          <label>Name</label>
          <input type={"text"}></input>
          <label>E-mail</label>
          <input type={"email"}></input>
          <label>Message</label>
          <textarea placeholder="Write your message here please"></textarea>
        </form>
      </div>
      <div className="socialNetwork-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
export { ContactMe };

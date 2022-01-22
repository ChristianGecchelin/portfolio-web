import React from "react";
import "./ContactMe.css";
function ContactMe() {
  return (
    <section className="ContactMe-container">
      <div className="form-container">
        <form>
          <label>Name</label>
          <input type={text}></input>
          <label></label>
          <input></input>
          <label></label>
          <textarea></textarea>
        </form>
      </div>
      <div className="socialNetwork-container"></div>
    </section>
  );
}
export { ContactMe };

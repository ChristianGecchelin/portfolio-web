import React from "react";
import axios from "axios";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "./ContactMe.css";
function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/2b9789e4-cfc0-44dc-990d-113008bd53d5",
        data
      )
      .then((response) => console.log(response));

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="ContactMe-container" id="contact">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-section-container">
            <label>Name</label>
            <input
              required
              type={"text"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div className="form-section-container">
            <label>E-mail</label>
            <input
              required
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="form-section-container xl">
            <label>Message</label>
            <textarea
              required
              placeholder="Write your message here please"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="socialNetwork-container">
        <a
          href="https://github.com/ChristianGecchelin"
          target="_blank"
          rel="external noreferrer noopener"
        >
          <div className="card-container">
            <BsGithub />
          </div>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/christiangecchelin/"
          target="_blank"
          rel="external noreferrer noopener"
        >
          <div className="card-container">
            <BsLinkedin />
          </div>
        </a>
        <a
          href="https://twitter.com/ChristianGecche"
          target="_blank"
          rel="external noreferrer noopener"
        >
          <div className="card-container">
            <BsTwitter />
          </div>{" "}
        </a>
      </div>
    </section>
  );
}
export { ContactMe };

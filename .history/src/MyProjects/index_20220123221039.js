import React from "react";
import ToDoApp from "../Assets/to-do-app.png";
import Rick from "../Assets/rick.png";
import Calculator from "../Assets/calculator.png";
import Mobile from "../Assets/mobile.png";
import Portfolio from "../Assets/portfolio.png";
import "./MyProjects.css";
function MyProjects() {
  return (
    <section className="project-section" id="projects">
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={ToDoApp}
            alt="ToDoAppImage"
            title="ToDoAppImage"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">To-Do-App</h3>
            <p className="card-text">
              Application to save things, they will persist even if you close
              the browser
            </p>
            <p className="card-text">
              Stack used: React, Hooks, custom Hooks, localStorage, Context;
              Css3, Figma.
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See Project</button>
            </a>
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Rick}
            alt="rickandmortypic"
            title="rickandmortypic"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title xl">Rick And Morty</h3>
            <p className="card-text">
              Application using Vanilla Javascript to call an API and render the
              results
            </p>
            <p className="card-text">
              Stack used: Vanilla Javascript, POO, Async/Await,Try/Catch,Array's
              Method
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Calculator}
            alt="Calculator Js"
            title="Calculator Js"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">Calculator</h3>
            <p className="card-text">
              Application made with HTML, CSS, Javascript vanilla
            </p>
            <p className="card-text">
              Stack used: HTML Semantic, CSS responsive, Javascript functions,
              DOM manipulation
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Mobile}
            alt="CriptoExchange"
            title="CriptoExchange"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title xl">Website-Mobile-First</h3>
            <p className="card-text">
              Website entire made with semantic HTML, responsive CSS3
            </p>
            <p className="card-text">
              Stack used: HTML Semantic, basic SEO, Flexbox, Figma
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Portfolio}
            alt="Portfolio"
            title="Portfolio"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">Portfolio</h3>
            <p className="card-text">
              My Portfolio made with React's library, and CSS vanilla
            </p>
            <p className="card-text">
              Stack used: React hooks, Js POO. Css Animation, Css flexbox.
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/christiangecchelin/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export { MyProjects };

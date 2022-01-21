import React from "react";
import ToDoApp from "../Assets/to-do-app.png";
import Rick from "../Assets/rick.png";
import Calculator from "../Assets/calculator.png";
import Mobile from "../Assets/mobile.png";
import Portfolio from "../Assets/portfolio.png";
import "./MyProjects.css";
function MyProjects() {
  return (
    <section className="project-section">
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
              Css3
            </p>
          </div>
          <div className="button-container">
            <button>See repository</button>
            <button>See Project</button>
            {/* Crear componentes botones */}
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Rick}
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
              Css3
            </p>
          </div>
          <div className="button-container">
            <button>See repository</button>
            <button>See Project</button>
            {/* Crear componentes botones */}
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Calculator}
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
              Css3
            </p>
          </div>
          <div className="button-container">
            <button>See repository</button>
            <button>See Project</button>
            {/* Crear componentes botones */}
          </div>
        </div>
      </div>
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Mobile}
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
              Css3
            </p>
          </div>
          <div className="button-container">
            <button>See repository</button>
            <button>See Project</button>
            {/* Crear componentes botones */}
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
              Stack used: React props, Js POO. Css Animation, Css flexbox.
            </p>
          </div>
          <div className="button-container">
            <button>See repository</button>
            <button>See Project</button>
            {/* Crear componentes botones */}
          </div>
        </div>
      </div>
    </section>
  );
}
export { MyProjects };

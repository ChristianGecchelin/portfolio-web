import React from "react";
import ToDoApp from "../Assets/to-do-app.png";
function MyProjects() {
  return (
    <section className="project-section">
      <div className="project-card">
        <img
          className="card-image"
          src={ToDoApp}
          alt="ToDoAppImage"
          title="ToDoAppImage"
          width={"100px"}
          height={"150px"}
        ></img>
        <div className="card-text-container">
          <h3 className="card-title">To-Do-App</h3>
          <p className="card-text">
            Application to save things, they will persist even if you close the
            browser
          </p>
          <p className="card-text">
            Stack used: React, Hooks, custom Hooks, localStorage, Context; Css3
          </p>
        </div>
        <div className="button-container">
          <button className="button-repository">See repository</button>
          <button className="button-project">See Project</button>
          {/* Crear componentes botones */}
        </div>
      </div>
    </section>
  );
}
export { MyProjects };

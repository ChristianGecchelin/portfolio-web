import React from "react";
import ToDoApp from "../Assets/to-do-app.png";
function MyProjects() {
  return (
    <section>
      <div>
        <img alt="ToDoAppImage" title="ToDoAppImage">
          {ToDoApp}
        </img>
        <div>
          <h3>To-Do-App</h3>
          <p>
            Application to save things, they will persist even if you close the
            browser
          </p>
          <p>
            Stack used: React, Hooks, custom Hooks, localStorage, Context; Css3
          </p>
        </div>
        <div>
          <button>See repository</button>
          <button>See Project</button>
          {/* Crear componentes botones */}
        </div>
      </div>
      <div>
        <img></img>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <img></img>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <img></img>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <img></img>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </section>
  );
}
export { MyProjects };

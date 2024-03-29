import React from "react";
import ToDoApp from "../Assets/to-do-app.png";
import Rick from "../Assets/rick.png";
import Calculator from "../Assets/calculator.png";
import Mobile from "../Assets/mobile.png";
import Portfolio from "../Assets/portfolio.png";
import Ironfit from "../Assets/ironfit.png";
import CarGame from "../Assets/carGame.png";
import Mapbox from "../Assets/mapbox.png";
import Jamme from "../Assets/jamme.png";
import "./MyProjects.css";
function MyProjects() {
  return (
    <section className="project-section" id="projects">
      <div className="vh-container">
        <div className="project-card">
          <img
            className="card-image"
            src={Jamme}
            alt="JammeImage"
            title="JammeImage"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">Jamme Five</h3>
            <p className="card-text">
              This app is created for those musician who looks for people to
              play together. You can create events or search from dates or
              places.
            </p>
            <p className="card-text">
              Stack used: React, Hooks, custom Hooks, Context, MongoDB, NodeJS,
              Mongoose, Express, MaterialUI; Css3, Figma.
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://github.com/ChristianGecchelin/jamFront"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See FrontEnd repository</button>
            </a>
            <a
              href="https://github.com/Zeble1603/jam-back"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See Backend repository</button>
            </a>
            <a
              href="https://jamme-five.herokuapp.com/"
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
              href="https://github.com/ChristianGecchelin/to-do-app"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://christiangecchelin.github.io/to-do-app/"
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
            src={Ironfit}
            alt="IronFit"
            title="IronFit"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">Iron-FIT</h3>
            <p className="card-text">
              Application to create your own gym routine, save your
              achievements.
            </p>
            <p className="card-text">
              Stack used: NodeJs, Express, Mongo, Handlebars, Mongoose; Css3,
              Axios.
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://github.com/ChristianGecchelin/iron-fit/tree/prod"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://ironhackfitness.herokuapp.com/"
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
            src={Mapbox}
            alt="MapboxApp"
            title="MapboxApp"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">MapBox App</h3>
            <p className="card-text">
              Application similar to google maps, to mark up locations. Render
              different map views.
            </p>
            <p className="card-text">Stack used: VueJs, CSS3, Axios.</p>
          </div>
          <div className="button-container">
            <a
              href="https://github.com/ChristianGecchelin/challenge-vuejs"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://mapbox-app-christian-gecchelin.netlify.app/"
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
            src={CarGame}
            alt="CarGame"
            title="CarGame"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">CarGame</h3>
            <p className="card-text">Videogame</p>
            <p className="card-text">
              Stack used: HTML5, CSS3, Canvas, Javascript
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://github.com/ChristianGecchelin/ironCarGame"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://christiangecchelin.github.io/ironCarGame/"
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
            src={Portfolio}
            alt="Portfolio"
            title="Portfolio"
          ></img>
          <div className="card-text-container">
            <h3 className="card-title">Portfolio</h3>
            <p className="card-text">
              My Portfolio made with React JS library, and CSS vanilla
            </p>
            <p className="card-text">
              Stack used: React hooks, Js POO. Css Animation, Css flexbox.
            </p>
          </div>
          <div className="button-container">
            <a
              href="https://github.com/ChristianGecchelin/portfolio-web"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <button>See repository</button>
            </a>
            <a
              href="https://christiangecchelin.github.io/portfolio-web/"
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
              href="https://github.com/ChristianGecchelin/RickAndMortyApi"
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
              href="https://github.com/ChristianGecchelin/javascript-project"
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
              href="https://github.com/ChristianGecchelin/spa-full-css-html"
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

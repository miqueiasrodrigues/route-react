import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <React.Fragment>
      <aside className="menu">
        <nav>
          <div className="profile">
            <Link to="/">
              <img
                src="./images/car.png"
                alt="Carro"
                title="Carro antigo"
              ></img>
            </Link>
            <div className="description">
              <span>Miquéias</span>
              <span>FullStack Developer</span>
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="./images/about.svg"
                    width="32px"
                    height="32px"
                  ></img>
                  Rota #1
                </Link>
              </li>
              <li>
                <Link to="/route2">
                  <img
                    src="./images/skills.svg"
                    width="32px"
                    height="32px"
                  ></img>
                  Rota #2
                </Link>
              </li>
              <li>
                <Link to="/route3">
                  <img
                    src="./images/projects.svg"
                    width="32px"
                    height="32px"
                  ></img>
                 Rota #3
                </Link>
              </li>
              <li>
                <Link to="/route4">
                  <img
                    src="./images/contact.svg"
                    width="32px"
                    height="32px"
                  ></img>
                  Rota #4
                </Link>
              </li>
            </ul>
          </div>

          <div className="channels">
            <a href="https://github.com/miqueiasrodrigues" target="_blank">
              <img
                src="./images/github.svg"
                alt="Meu GitHub"
                title="GitHub"
                width="32px"
                height="32px"
              ></img>
            </a>

            <a
              href="https://www.linkedin.com/in/miquéias-santos-rodrigues-66ba061b4"
              target="_blank"
            >
              <img
                src="./images/linkedin.svg"
                alt="Meu LinkedIn"
                title="LinkedIn"
                width="32px"
                height="32px"
              ></img>
            </a>
          </div>
        </nav>
      </aside>
    </React.Fragment>
  );
};

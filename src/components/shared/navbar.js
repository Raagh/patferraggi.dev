import React from "react"
import GithubIcon from "../../assets/icons/github.png"
import LinkedinIcon from "../../assets/icons/linkedin.png"

export default () => (
  <div id="navbar" className="navbar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      id="nav-mobile"
      className="navbar--mobile"
    >
      <path d="M4 8h24M4 16h24M4 24h24" />
    </svg>

    <nav id="nav-desktop" className="navbar--desktop">
      <li>
        <a
          href="#intro"
          className="navbar__link--nodecoration navbar__link--active"
          rel="noopener noreferrer"
        >
          intro
        </a>
      </li>
      <li>blog</li>
      <li>
        <a
          href="#about"
          className="navbar__link--nodecoration"
          rel="noopener noreferrer"
        >
          about
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="navbar__link--nodecoration"
          rel="noopener noreferrer"
        >
          projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="navbar__link--nodecoration"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </li>
      <li className="navbar__link--active navbar__link--separated">eng</li>
      <li>esp</li>
      <li className="navbar__link--separated-extra">
        <a
          href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="navbar__link--external"
            alt="linkedin link"
            src={LinkedinIcon}
          />
        </a>
        <a
          href="https://github.com/Raagh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="navbar__link--external"
            alt="github link"
            src={GithubIcon}
          />
        </a>
      </li>
    </nav>
  </div>
)

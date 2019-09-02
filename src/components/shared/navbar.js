import React from "react"
import GithubIcon from "../../assets/icons/github.png"
import LinkedinIcon from "../../assets/icons/linkedin.png"
import Logo from "../../assets/logo.svg"
import { Link } from "gatsby"
const scrollToElement = require("scroll-to-element")

const setActiveLinkStyling = e => {
  const activeClassName = "navbar__link--active"
  const elements = document.getElementsByClassName(activeClassName)
  for (const element of elements) {
    element.classList.remove(activeClassName)
  }
  e.target.classList.add(activeClassName)
}

const handleLinkClick = (e, target) => {
  if (typeof window !== undefined) {
    if (window.location.pathname === "/") {
      e.preventDefault()

      setActiveLinkStyling(e)

      scrollToElement(target, {
        offset: -95,
        duration: 1000,
      })
    }
  }
}

export default () => (
  <nav id="navbar" className="navbar">
    <img id="logo" alt="logo" className="logo" src={Logo}></img>
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

    <div id="nav-desktop" className="navbar--desktop">
      <Link
        to="/#top"
        className="navbar__link--active"
        onClick={e => handleLinkClick(e, "#logo")}
      >
        intro
      </Link>
      <Link to="/#blog" onClick={e => handleLinkClick(e, "#blog")}>
        blog
      </Link>
      <Link to="/#about" onClick={e => handleLinkClick(e, "#about")}>
        about
      </Link>
      <Link to="/#projects" onClick={e => handleLinkClick(e, "#projects")}>
        projects
      </Link>
      <Link to="/#contact" onClick={e => handleLinkClick(e, "#contact")}>
        contact
      </Link>
      <li key="eng" className="navbar__link--active navbar__link--separated">
        eng
      </li>
      {/* <li key="esp">esp</li> */}
      <li key="icons" className="navbar__link--separated-extra">
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
    </div>
  </nav>
)

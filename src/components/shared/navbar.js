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

const links = [
  { name: "logo", to: "/#top", className: "navbar__link--active" },
  { name: "blog", to: "/#blog" },
  { name: "about", to: "/#about" },
  { name: "projects", to: "/#projects" },
  { name: "contact", to: "/#contact" },
]

const renderLinks = linksToRender => {
  return linksToRender.map(link => (
    <Link
      to={link.to}
      onClick={e => handleLinkClick(e, `#${link.name}`)}
      className={link.className}
    >
      {link.name}
    </Link>
  ))
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
      {renderLinks(links)}
    </svg>

    <div id="nav-desktop" className="navbar--desktop">
      {renderLinks(links)}
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

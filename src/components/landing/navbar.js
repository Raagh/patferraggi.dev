import React, { useState } from "react"
import GithubIcon from "../../../content/assets/icons/github.png"
import LinkedinIcon from "../../../content/assets/icons/linkedin.png"
import Logo from "../../../content/assets/logo.svg"
import { Link } from "gatsby"
const scrollToElement = require("scroll-to-element")

const links = [
  { name: "intro", to: "/#top", className: "navbar__link--active" },
  { name: "blog", to: "/#blog" },
  { name: "about", to: "/#about" },
  { name: "projects", to: "/#projects" },
  { name: "contact", to: "/#contact" },
]

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const renderLinks = (linksToRender, isMobile) => {
    return linksToRender.map(link => {
      const className =
        (isMobile ? "navbar__link--mobile " : "") +
        (link.className ? link.className : "")

      return (
        <Link
          to={link.to}
          onClick={e => handleLinkClick(e, `#${link.name}`)}
          className={className}
          key={link.name}
        >
          {link.name}
        </Link>
      )
    })
  }

  const setActiveLinkStyling = e => {
    const activeClassName = "navbar__link--active"

    Array.from(document.getElementsByClassName(activeClassName)).map(x =>
      x.classList.remove(activeClassName)
    )

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

        handleOpenCloseBurgerIcon()
      }
    }
  }

  const handleOpenCloseBurgerIcon = () => {
    const container = document.getElementsByClassName(
      "navbar-links-container"
    )[0]

    if (container !== undefined && !isOpen) {
      container.classList.add("navbar-links-container--isOpen")
      setIsOpen(true)
    } else if (container !== undefined && isOpen) {
      container.classList.remove("navbar-links-container--isOpen")
      setIsOpen(false)
    }
  }

  return (
    <nav id="navbar-container" className="navbar">
      <nav id="nav-mobile" className="navbar--mobile">
        <div className="navbar-stretch">
          <img id="logo" alt="logo" className="logo" src={Logo}></img>
          <button onClick={handleOpenCloseBurgerIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              id="burger-menu"
            >
              <path d="M4 8h24M4 16h24M4 24h24" />
            </svg>
          </button>
        </div>
        <div className="navbar-links-container">{renderLinks(links, true)}</div>
      </nav>

      <div id="nav-desktop" className="navbar--desktop">
        <img id="logo" alt="logo" className="logo" src={Logo}></img>
        {renderLinks(links)}
        <li key="eng" className="navbar__link--separated">
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
}

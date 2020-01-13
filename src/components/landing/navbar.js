import React, { useState } from "react"
import GithubIcon from "../../../content/assets/icons/github.png"
import LinkedinIcon from "../../../content/assets/icons/linkedin.png"
import Logo from "../../../content/assets/logo.svg"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "../shared/device"
import globalStyles from "../shared/global-styles"
const scrollToElement = require("scroll-to-element")

const LogoWrapper = styled.img`
  grid-area: logo;
  padding-top: 2rem;

  @media ${device.phone} {
    padding-bottom: 0;
  }

  @media ${device.desktop} {
    padding-bottom: 3.2rem;
  }
`

const links = [
  { name: "intro", to: "/#top", className: "navbar__link--active" },
  { name: "blog", to: "/#blog" },
  { name: "about", to: "/#about" },
  { name: "projects", to: "/#projects" },
  { name: "contact", to: "/#contact" },
]

const navbarMobileStyles = () => `
  .navbar--desktop {
    display: none !important;
  }

  & a {
    line-height: 30px;
  }

  .navbar--mobile {
    display: block;
  }
`

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: ${globalStyles.fontFamilyMedium};
  grid-area: nav;
  list-style: none;
  font-size: 18px;
  margin: 0;
  position: fixed;
  z-index: 9999;

  & a {
    color: ${globalStyles.primaryColor};
    padding: 0.1rem 0 0;
    line-height: 18px;
  }

  & button {
    background: none !important;
    border: none;
    color: ${globalStyles.primaryColor};
  }

  .navbar__link--active {
    color: ${globalStyles.secondaryColor} !important;
  }

  .navbar__link--separated {
    padding-top: 15px;
    color: ${globalStyles.secondaryColor} !important;
  }

  .navbar__link--separated-extra {
    padding-top: 30px;
  }

  .navbar__link--external {
    padding: 0 1rem 0 0;
  }

  .navbar__link--mobile {
    width: 100%;
    display: block;
    padding: 0 0 0.5rem 0 !important;
    line-height: 30px;
    text-align: center;
  }

  .navbar-links-container {
    background-color: ${globalStyles.backgroundColor};
    flex-direction: column;
    position: fixed;
    width: 100vw;
    left: 0;
    display: none;
  }

  .navbar-links-container--isOpen {
    display: flex;
  }

  .navbar--desktop {
    display: flex;
    flex-direction: column;
    padding-top: 4.5rem;
  }

  .navbar--mobile {
    height: 5rem;
    background-color: ${globalStyles.backgroundColor};
    position: fixed;
    margin: 0 auto;
    width: 100%;
    padding-top: 0;
    display: none;

    & svg {
      width: 32px;
      height: 32px;
    }
  }

  .navbar-stretch {
    display: flex;
    flex-direction: row;
    padding-right: 11%;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  @media ${device.phone} {
    ${navbarMobileStyles}
  }

  @media ${device.tableLandscapeUntilDesktop} {
    ${navbarMobileStyles}
  }

  @media ${device.tabletPortrait} {
    ${navbarMobileStyles}
  }
`

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
    <NavbarContainer id="navbar-container">
      <nav id="nav-mobile" className="navbar--mobile">
        <div className="navbar-stretch">
          <LogoWrapper id="logo" alt="logo" src={Logo}></LogoWrapper>
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
        <LogoWrapper id="logo" alt="logo" src={Logo}></LogoWrapper>
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
    </NavbarContainer>
  )
}

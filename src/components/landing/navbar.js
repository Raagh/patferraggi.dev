import React, { useState } from "react"
import GithubIcon from "../../../content/assets/icons/github.png"
import LinkedinIcon from "../../../content/assets/icons/linkedin.png"
import Logo from "../../../content/assets/logo.svg"
// import { Link } from "gatsby"
import styled from "styled-components"
import globalStyles from "../shared/global-styles"

const LogoWrapper = styled.img`
  grid-area: logo;
`

const NavbarContainer = styled.nav`
  display: flex;
  font-family: ${globalStyles.fontFamilyMedium};
  grid-area: nav;
  list-style: none;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${globalStyles.backgroundColor};
  margin: 0 auto;
  width: 100%;
  padding-top: 0;

  & svg {
    width: 32px;
    height: 32px;
  }

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
`

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  // const links = [
  //   { name: "intro", to: "/#top", className: "navbar__link--active" },
  //   { name: "blog", to: "/#blog" },
  //   { name: "about", to: "/#about" },
  //   { name: "projects", to: "/#projects" },
  //   { name: "contact", to: "/#contact" },
  // ]

  // const renderLinks = (linksToRender) => {
  //   return linksToRender.map(link => {
  //     return (
  //       <Link
  //         to={link.to}
  //         onClick={e => handleLinkClick(e, `#${link.name}`)}
  //         className={className}
  //         key={link.name}
  //       >
  //         {link.name}
  //       </Link>
  //     )
  //   })
  // }

  // const setActiveLinkStyling = e => {
  //   const activeClassName = "navbar__link--active"

  //   Array.from(document.getElementsByClassName(activeClassName)).map(x =>
  //     x.classList.remove(activeClassName)
  //   )

  //   e.target.classList.add(activeClassName)
  // }

  // const handleLinkClick = (e, target) => {
  //   if (typeof window !== undefined) {
  //     if (window.location.pathname === "/") {
  //       e.preventDefault()

  //       setActiveLinkStyling(e)

  //       scrollToElement(target, {
  //         offset: -95,
  //         duration: 1000,
  //       })

  //       handleOpenCloseBurgerIcon()
  //     }
  //   }
  // }

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
      <LogoWrapper id="logo" alt="logo" src={Logo}></LogoWrapper>
      <div>
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
        <li key="icons">
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

      {/* <div className="navbar-links-container">{renderLinks(links, true)}</div> */}
    </NavbarContainer>
  )
}

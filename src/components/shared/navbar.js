import React, { useState } from "react"
import Headroom from "react-headroom"
import styled from "styled-components"
import GithubIcon from "../../../content/assets/icons/github.svg"
import LinkedinIcon from "../../../content/assets/icons/linkedin.png"
import BurgerMenu from "../../../content/assets/icons/hamburger-menu.svg"
import Logo from "../../../content/assets/logo.svg"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import Sidebar from "./sidebar"

const LogoWrapper = styled.img`
  grid-area: logo;

  @media ${device.small} {
    height: 2.65em;
  }
`

const NavbarContainer = styled.nav`
  display: flex;
  font-family: ${globalStyles.fontFamilyMedium};
  grid-area: nav;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${globalStyles.backgroundColor};
  margin-left: auto;
  margin-right: auto;
  max-width: 1660px;
  padding: 2rem;

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

const NavbarIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    @media ${device.small} {
      display: none;
    }
  }

  button {
    padding: 0 !important;
  }
`

const NavbarIconPadding = { padding: "0 2rem 0 0" }
const IconSize = { width: "18px", height: "18px" }

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Headroom>
      <NavbarContainer id="navbar-container">
        <a href="/">
          {" "}
          <LogoWrapper id="logo" alt="logo" src={Logo}></LogoWrapper>
        </a>

        <NavbarIconsContainer>
          <a
            href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
            target="_blank"
            rel="noopener noreferrer"
            style={NavbarIconPadding}
          >
            <img alt="linkedin link" src={LinkedinIcon} style={IconSize} />
          </a>
          <a
            href="https://github.com/Raagh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...NavbarIconPadding, paddingTop: "3px" }}
          >
            <img alt="github link" src={GithubIcon} style={IconSize} />
          </a>
          <button
            onClick={() => setIsOpen(true)}
            style={(NavbarIconPadding, { height: "100%" })}
          >
            <img alt="burger-menu" id="burger-menu" src={BurgerMenu}></img>
          </button>
        </NavbarIconsContainer>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
      </NavbarContainer>
    </Headroom>
  )
}

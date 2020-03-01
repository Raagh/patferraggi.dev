import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import IcomoonReact from "icomoon-react"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import iconSet from "../../../content/assets/icons/selection.json"
import CloseButton from "../../../content/assets/icons/close.svg"

const isMediaQuerySmallOrMedium =
  typeof window !== `undefined`
    ? window.matchMedia(device.small).matches ||
      window.matchMedia(device.medium).matches
    : false

const disableScrollingIfSidebarOpen = props => {
  const body =
    typeof document !== `undefined`
      ? document.getElementsByTagName("body")[0]
      : { style: { overflow: "" } }

  body.style.overflow = props.isOpen ? "hidden" : "visible"
}

export default props => {
  const sidebarWidth = isMediaQuerySmallOrMedium ? "100%" : "70%"

  disableScrollingIfSidebarOpen(props)

  const SidebarWrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: ${globalStyles.primaryColor};
    width: ${sidebarWidth};
    opacity: ${props.isOpen ? "1" : "0"};
    z-index: ${props.isOpen ? "99999" : "-1"};
    padding: 3.5rem 4rem 3.5rem 4rem;
    display: ${props.isOpen ? "flex" : "none"};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    &.slideIn {
      animation-name: slideIn;
      animation-duration: 0.3s;
    }

    @keyframes slideIn {
      from {
        width: 0;
      }

      to {
        width: ${sidebarWidth};
      }
    }

    @media ${device.small} {
      padding: 2rem;
    }
  `
  const LinksWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `
  const LinksList = styled.ol`
    display: flex;
    flex-direction: column;
  `

  const SpecialLinksList = styled.ol`
    display: flex;
    flex-direction: column;

    @media ${device.xsmall} {
      margin-bottom: 3rem;
    }
    @media ${device.small} {
      margin-bottom: 3rem;
    }
    @media ${device.medium} {
      margin-bottom: 3rem;
    }
  `

  const StyledGatsbyLink = styled(props => <Link {...props} />)`
    color: ${globalStyles.backgroundColor} !important;
    font-family: ${globalStyles.fontFamilyMedium};
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 64px !important;
    letter-spacing: -2.2528px;

    @media ${device.small} {
      font-size: 1.5em;
      line-height: 30px !important;
      letter-spacing: -1.13806px;
    }

    :hover {
      color: ${globalStyles.secondaryColor} !important;
    }
  `

  const StyledLink = styled.a`
    color: ${globalStyles.backgroundColor} !important;
    font-family: ${globalStyles.fontFamilyMedium};
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 64px !important;
    letter-spacing: -2.2528px;

    @media ${device.small} {
      font-size: 1.5em;
      line-height: 30px !important;
      letter-spacing: -1.13806px;
    }

    :hover {
      color: ${globalStyles.secondaryColor} !important;
    }
  `

  const StyledLinkText = styled.span`
    color: ${globalStyles.secondaryColor};
    text-decoration: underline;
  `

  return (
    <SidebarWrapper className={props.isOpen && "slideIn"}>
      <LinksWrapper>
        <LinksList>
          <StyledGatsbyLink
            to="/blog/"
            key="blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog en <StyledLinkText>*español*</StyledLinkText>
          </StyledGatsbyLink>
          <StyledLink
            href="https://dev.to/patferraggi"
            key="dev.to"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkText>dev.to</StyledLinkText> english blog
          </StyledLink>
          <StyledGatsbyLink
            to="#about"
            key="about"
            onClick={e => props.setIsOpen(false)}
          >
            {<IcomoonReact iconSet={iconSet} size={"1em"} icon="avatar" />}{" "}
            about
          </StyledGatsbyLink>
          <StyledGatsbyLink
            to="#projects"
            key="projects"
            onClick={e => props.setIsOpen(false)}
          >
            projects
          </StyledGatsbyLink>
          <StyledLink href="mailto:patferraggi@gmail.com" key="mail">
            contact me{" "}
            {<IcomoonReact iconSet={iconSet} size={"1em"} icon="email" />} at
            <p>
              <StyledLinkText>patferraggi@gmail.com</StyledLinkText>
            </p>
          </StyledLink>
        </LinksList>
        <SpecialLinksList>
          <StyledLink
            href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
            key="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifySelf: "flex-end" }}
          >
            linkedin
          </StyledLink>
          <StyledLink
            href="https://github.com/Raagh"
            key="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </StyledLink>
        </SpecialLinksList>
      </LinksWrapper>
      <button
        onClick={() => props.setIsOpen(false)}
        style={{ color: globalStyles.backgroundColor }}
        id="exit"
      >
        <img alt="close-button" id="close-button" src={CloseButton}></img>
      </button>
    </SidebarWrapper>
  )
}

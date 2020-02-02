import React from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import { Link } from "gatsby"

export default props => {
  const sidebarWidth = "70%"

  const SidebarWrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${globalStyles.primaryColor};
    height: ${props.isOpen ? "100vh" : "0"};
    width: ${sidebarWidth};
    opacity: ${props.isOpen ? "1" : "0"};
    z-index: ${props.isOpen ? "99999" : "-1"};
    padding: 3.5rem 4rem 3.5rem 4rem;

    &.slideIn {
      animation-name: slideIn;
      animation-duration: 0.4s;
    }

    @keyframes slideIn {
      from {
        width: 0;
      }

      to {
        width: ${sidebarWidth};
      }
    }
  `
  const LinksWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    height: 70%;
  `
  const StyledLink = styled(props => <Link {...props} />)`
    color: ${globalStyles.backgroundColor} !important;
    font-family: ${globalStyles.fontFamilyMedium};
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 64px;
    letter-spacing: -2.2528px;

    @media ${device.small} {
      font-size: 1.5em;
      line-height: 30px;
      letter-spacing: -1.13806px;
    }
  `

  const StyledLinkText = styled.span`
    color: ${globalStyles.secondaryColor};
  `

  return (
    <SidebarWrapper className={props.isOpen && "slideIn"}>
      <LinksWrapper>
        <StyledLink to="https://www.patferraggi.dev/blog/" key="blog">
          blog en <StyledLinkText>*español*</StyledLinkText>
        </StyledLink>
        <StyledLink to="https://dev.to/patferraggi" key="dev.to">
          <StyledLinkText>dev.to</StyledLinkText> english blog
        </StyledLink>
        <StyledLink to="https://www.patferraggi.dev/blog/" key="blog">
          blog en <StyledLinkText>*español*</StyledLinkText>
        </StyledLink>
        <StyledLink to="https://www.patferraggi.dev/blog/" key="blog">
          blog en <StyledLinkText>*español*</StyledLinkText>
        </StyledLink>
        <StyledLink to="https://www.patferraggi.dev/blog/" key="blog">
          blog en <StyledLinkText>*español*</StyledLinkText>
        </StyledLink>
        <StyledLink to="https://www.patferraggi.dev/blog/" key="blog">
          blog en <StyledLinkText>*español*</StyledLinkText>
        </StyledLink>
      </LinksWrapper>
      <button
        onClick={() => props.setIsOpen(false)}
        style={{ color: globalStyles.backgroundColor }}
        id="exit"
      >
        &times;
      </button>
    </SidebarWrapper>
  )
}

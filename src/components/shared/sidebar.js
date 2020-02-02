import React from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import { Link } from "gatsby"

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

export default props => {
  const StyledLink = styled(props => <Link {...props} />)`
    color: ${globalStyles.backgroundColor} !important;
  `

  const sidebarWidth = "70%"

  const SidebarWrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${globalStyles.primaryColor};
    height: 100vh;
    width: ${sidebarWidth};
    opacity: ${props.isOpen ? "1" : "0"};
    z-index: ${props.isOpen ? "99999" : "-1"};

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

  const renderLinks = linksToRender => {
    return linksToRender.map(link => {
      return (
        <StyledLink to={link.to} onClick={`#${link.name}`} key={link.name}>
          {link.name}
        </StyledLink>
      )
    })
  }

  return (
    <SidebarWrapper className={props.isOpen && "slideIn"}>
      <LinksWrapper>{renderLinks(props.links, true)}</LinksWrapper>
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

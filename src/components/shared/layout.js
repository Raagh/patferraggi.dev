import React from "react"
import Navbar from "./navbar"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import { createGlobalStyle } from "styled-components"
import InterRegular from "../../../content/assets/fonts/Inter-Regular.otf"
import InterMedium from "../../../content/assets/fonts/Inter-Medium.otf"
import "normalize.css"

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    box-shadow: none !important;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
      :focus {
        outline:0;
      }
  }

  html,
  body {
    height: 100vh;
    background-color: ${globalStyles.backgroundColor};
  }

  @font-face {
    font-family: "Inter Regular";
    src: url(${InterRegular}) format("opentype");
  }

  @font-face {
    font-family: "Inter Medium";
    src: url(${InterMedium}) format("opentype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

const MainContainer = styled.main`
  background-color: ${globalStyles.backgroundColor} !important;
  color: ${globalStyles.primaryColor} !important;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`
export default ({ children, removeSidePadding }) => {
  const InternalContainer = styled.div`
    max-width: 1660px;
    margin: auto;
    padding: ${removeSidePadding ? "2rem 0 2rem 0" : "2rem"};
    width: 100%;
  `

  return (
    <MainContainer>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <InternalContainer>{children}</InternalContainer>
    </MainContainer>
  )
}

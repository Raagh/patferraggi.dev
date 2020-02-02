import React from "react"
import Navbar from "./navbar"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import { createGlobalStyle } from "styled-components"
import InterRegular from "../../../content/assets/fonts/Inter-Regular.otf"
import InterMedium from "../../../content/assets/fonts/Inter-Medium.otf"
import SEO from "./seo"
import "normalize.css"

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    box-shadow: none !important;
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

const InternalContainer = styled.div`
  max-width: 1660px;
  margin: auto;
  padding: 2rem;
`

export default ({ children }) => (
  <MainContainer>
    <SEO title="Patricio Ferraggi Ares"></SEO>
    <GlobalStyle></GlobalStyle>
    <Navbar></Navbar>
    <InternalContainer>{children}</InternalContainer>
  </MainContainer>
)

import React from "react"
import Intro from "../components/landing/intro"
import Navbar from "../components/landing/navbar"
import styled from "styled-components"
import globalStyles from "../components/shared/global-styles"
import device from "../components/shared/device"
import { createGlobalStyle } from "styled-components"
import InterRegular from "./../../content/assets/fonts/Inter-Regular.otf"
import InterMedium from "../../content/assets/fonts/Inter-Medium.otf"
import SEO from "../components/blog/seo"
import "normalize.css"

const BasicStyle = createGlobalStyle`
  a {
    text-decoration: none;
    box-shadow: none !important;
  }

  html,
  body {
    height: 1920px;
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
  }
`

const LandingMain = styled.main`
  background-color: ${globalStyles.backgroundColor} !important;
  color: ${globalStyles.primaryColor} !important;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`

const LandingInternalContainer = styled.div`
  max-width: 1452px;
  margin: auto;
  padding: 1.5rem;
`

export default () => (
  <LandingMain>
    <SEO title="Patricio Ferraggi"></SEO>
    <BasicStyle></BasicStyle>
    <Navbar></Navbar>
    <LandingInternalContainer>
      <Intro></Intro>
    </LandingInternalContainer>
  </LandingMain>
)

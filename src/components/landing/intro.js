import React from "react"
import styled from "styled-components"
import device from "../shared/device"
import globalStyles from "../shared/global-styles"
import iconSet from "../../../content/assets/icons/selection.json"
import IcomoonReact from "icomoon-react"

const IntroWrapper = styled.section`
  grid-area: intro;
  font-family: ${globalStyles.fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  width: 80%;
  padding: 6rem 0 6rem 0;

  @media ${device.small} {
    padding: 2rem 0 2rem 0;
    font-size: 1.5em;
    line-height: 30px;
    letter-spacing: -1.13806px;
    width: 100%;
  }
`

export default () => (
  <IntroWrapper id="intro">
    <p>
      I'm an Argentinian software developer, currently based in Belgium.{" "}
      {<IcomoonReact iconSet={iconSet} size={"1em"} icon="hand" />} I am
      passionate about software craftsmanship and creating high quality{" "}
      {<IcomoonReact iconSet={iconSet} size={"1em"} icon="cup" />}, user centric
      solutions, but also muay thai, travelling and my cat.
    </p>
  </IntroWrapper>
)

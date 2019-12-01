import React from "react"
import styled from "styled-components"
import device from "../shared/device"
import globalStyles from "../shared/global-styles"

const IntroWrapper = styled.section`
  grid-area: intro;
  font-size: 64px;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  width: 90%;

  @media ${device.phone} {
    padding: 1rem 0 0 0;
    font-size: 32px;
    line-height: 32px;
    width: 100%;
  }
  @media ${device.desktop} {
    padding: 3rem 0 0 0;
  }
`

export default () => (
  <IntroWrapper id="intro">
    <p>
      I am an Argentinian software developer, currently based in Belgium. I am
      passionate about software craftsmanship and creating high quality, user
      centric solutions
    </p>
  </IntroWrapper>
)

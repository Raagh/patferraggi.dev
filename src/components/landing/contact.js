import React from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import iconSet from "../../../content/assets/icons/selection.json"
import IcomoonReact from "icomoon-react"

const ContactWrapper = styled.section`
  margin-top: 8rem;
  margin-bottom: 12rem;
  width: 62%;
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  font-family: ${globalStyles.fontFamilyMedium};
  color: ${globalStyles.primaryColor};

  @media ${device.small} {
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -1px;
    margin-top: 2rem;
    margin-bottom: 4.5rem;
    width: 100%;

    & p:nth-child(1) {
      padding-bottom: 2rem;
    }
  }

  @media ${device.medium} {
    margin-top: 2rem;
    margin-bottom: 4.5rem;
    width: 100%;

    & p:nth-child(1) {
      padding-bottom: 2rem;
    }
  }
`

const StyledHeaderLink = styled.a`
  color: ${globalStyles.secondaryColor};
  text-decoration: underline !important;
`

export default () => (
  <ContactWrapper id="contact">
    <p>
      Check my{" "}
      <StyledHeaderLink
        href="https://github.com/Raagh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </StyledHeaderLink>{" "}
      for more projects
    </p>
    <p>If you have a project or initiative you think I can help, find me at </p>
    <IcomoonReact iconSet={iconSet} size={"1em"} icon="email" />{" "}
    <StyledHeaderLink
      href="mailto: pattferraggi@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      patferraggi@gmail.com
    </StyledHeaderLink>{" "}
    <p className="whitespace"></p>
  </ContactWrapper>
)

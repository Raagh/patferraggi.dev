import React from "react"
import styled from "styled-components"
import globalStyles from "../shared/global-styles"
import device from "../shared/device"

const ContactWrapper = styled.section`
  padding-top: 5rem;
  font-size: 64px;
  width: 100%;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  color: ${globalStyles.primaryColor};

  & p:nth-child(1) {
    padding-bottom: 3rem;
  }

  & a {
    color: ${globalStyles.secondaryColor};
    word-break: break-all;
  }

  @media ${device.phone} {
    padding-top: 4rem;
    font-size: 32px;
    line-height: 32px;

    & p:nth-child(1) {
      padding-bottom: 2rem;
    }
  }
`

export default () => (
  <ContactWrapper id="contact">
    <p>
      You can check my{" "}
      <a
        href="https://github.com/Raagh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      for more projects
    </p>
    <p>
      If you have a project or initiative you think I can help you can find me
      at{" "}
    </p>
    <a
      href="mailto: pattferraggi@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      patferraggi@gmail.com
    </a>{" "}
    <p className="whitespace"></p>
  </ContactWrapper>
)

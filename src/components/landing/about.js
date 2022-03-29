import React from "react"
import styled from "styled-components"
import device from "../../config/device"
import globalStyles from "../../config/style-variables"

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: row;
  font-family: ${globalStyles.fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  color: ${globalStyles.primaryColor};
  margin: 7rem 0 7rem 0;

  @media ${device.small} {
    flex-direction: column;
    margin: 2rem 0 2rem 0;
    padding: 0.5rem;
  }

  @media ${device.medium} {
    margin: 4rem 0 4rem 0;
    padding: 0.5rem;
  }
`
const BackgroundTitle = styled.div`
  font-size: 32px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  width: 50%;

  @media ${device.small} {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -1px;
    width: 100%;
  }
`

const BackgroundTitleBig = styled.p`
  font-size: 58px;

  @media ${device.small} {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -1px;
  }
`
const BackgroundText = styled.article`
  padding-top: 4rem;
  font-size: 24px;
  line-height: 32px;
  font-family: ${globalStyles.fontFamilyRegular};
  width: 45%;

  @media ${device.small} {
    padding-top: 1.5rem;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.513925px;
  }
`

const TextOnSecondaryColor = styled.span`
  color: ${globalStyles.secondaryColor};
  text-decoration: underline;
`

export default () => (
  <AboutWrapper id="about">
    <BackgroundTitle>
      <p>So about me...</p>
      <BackgroundTitleBig>What's my background?</BackgroundTitleBig>
    </BackgroundTitle>
    <BackgroundText>
      <p>
        Over the past 7+ years, I ‘ve created a great variety of high quality web
        business applications using technologies like C#, asp.net core, 
        Node.js, Express.js, Angular, React.js using both JavaScript and TypeScript. 
        I focus on software that is testable, maintainable, reusable and adaptive, requirements for success
        in Agile environments.
      </p>
      <br />
      <p>
        I've experience in startup, medium and large enterprises and I'm used to
        working in teams... but also managing my own projects. Some of the
        companies I've worked for include: Proxyclick, Rydoo, Telefonica Argentina, Cencosud
        and YPF.
      </p>
      <br />
      <p>
        As an employee I'm proactive, detail oriented and I enjoy playing an
        active role in improving business.
      </p>
      <br />
      <p>
        Check my
        <a
          href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <TextOnSecondaryColor>LinkedIn</TextOnSecondaryColor>
        </a>{" "}
        for more details.
      </p>
    </BackgroundText>
  </AboutWrapper>
)

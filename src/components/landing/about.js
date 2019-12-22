import React from "react"
import styled from "styled-components"
import device from "../shared/device"
import globalStyles from "../shared/global-styles"

const AboutWrapper = styled.section`
  grid-area: about;
  padding-top: 5rem;
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "back-title back-text"
    "back-title back-text"
    "back-title back-text"
    "extra-title extra-text";

  @media ${device.phone} {
    grid-area: about;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
  }
`
const BackgroundTitle = styled.div`
  grid-area: back-title;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  font-size: 64px;
  padding-right: 20px;

  @media ${device.phone} {
    padding-bottom: 1rem;
    line-height: 32px;
    font-size: 32px;
  }
`
const TextOnSecondaryColor = styled.span`
  color: ${globalStyles.secondaryColor};
`

const ExtraTitle = styled.div`
  padding-top: 1rem;
  opacity: 0.5;
  grid-area: extra-title;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  font-size: 64px;
  color: ${globalStyles.inactiveColor};
  padding-right: 20px;

  @media ${device.phone} {
    padding-top: 1rem;
    padding-bottom: 2rem;
    opacity: 0.4;
    grid-area: extra-title;
    font-family: ${globalStyles.fontFamilyMedium};
    line-height: 32px;
    font-size: 32px;
    color: ${globalStyles.inactiveColor};
  }
`

const ExtraText = styled.article`
  padding-top: 1rem;
  grid-area: extra-text;
  font-family: ${globalStyles.fontFamilyRegular};
  line-height: 32px;
  font-size: 20px;

  @media ${device.phone} {
    padding-top: 0;
  }
`

const BackgroundText = styled.article`
  display: flex;
  flex-direction: column;
  grid-area: back-text;
  font-family: ${globalStyles.fontFamilyRegular};
  line-height: 32px;
  font-size: 20px;
`

export default () => (
  <AboutWrapper id="about">
    <BackgroundTitle>
      So <TextOnSecondaryColor>about me!</TextOnSecondaryColor>, what's my
      background
    </BackgroundTitle>
    <BackgroundText>
      <p>
        Over the past 5 years, I have created a great variety of high quality
        web business applications using technologies like C#, asp.net core,
        HTML5, CSS3, Angular, Javascript and Typescript. I focus on creating
        software that is testable, maintainable, reusable and adaptive,
        requirements for success in Agile environments.
      </p>
      <p>
        I've have experience in startup, medium and large size enterprises and
        I'm used to working in teams but also managing my own projects. Some of
        the companies I've worked for include: Rydoo, Telefonica Argentina,
        Cencosud and YPF. Check my
        <a
          href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn{" "}
        </a>
        for more details.
      </p>
      <p>
        As an employee I'm proactive, detail oriented and I enjoy playing an
        active role in improving business.
      </p>
    </BackgroundText>

    <ExtraTitle>Apart from work...</ExtraTitle>
    <ExtraText>
      <p>
        I love writing on my blog, creating software development courses, giving
        coaching to other developers and experimenting with multiple
        technologies on my open source projects.
      </p>
      <p>
        I exercise often and I've been practicing Muay Thai for over 7 years.
      </p>
      <p>
        I also like to travel and taking pictures, specially from my cat who
        hates me for it.
      </p>
    </ExtraText>
  </AboutWrapper>
)

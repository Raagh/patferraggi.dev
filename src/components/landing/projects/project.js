import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file: file(absolutePath: { regex: "/project-rydoo.png/" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const ProjectWrapper = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 5.5rem;

    @media ${device.small} {
      flex-direction: column-reverse;
      margin-top: 2rem;
    }

    @media ${device.medium} {
      flex-direction: column-reverse;
      margin-top: 2rem;
    }
  `

  const ProjectWrapperImage = styled(Img)`
    width: 60%;
    max-width: 70%;

    @media ${device.small} {
      max-width: 100%;
      width: 100%;
    }

    @media ${device.medium} {
      max-width: 100%;
      width: 100%;
    }
  `

  const ProjectWrapperProject = styled.article`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 3.5rem;
    background-color: ${globalStyles.primaryColor};
    color: ${globalStyles.backgroundColor};

    @media ${device.small} {
      padding: 1rem;
      width: 100%;
    }

    @media ${device.medium} {
      padding: 2rem;
      width: 100%;
    }
  `

  const ProjectName = styled.div`
    font-size: 54px;
    line-height: 64px;
    letter-spacing: -2.2528px;

    @media ${device.small} {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.970036px;
    }
  `

  const ProjectSkills = styled.ul`
    margin-top: 2rem;
    font-size: 32px;
    line-height: 40px;
    opacity: 0.5;
    letter-spacing: -2.2528px;
    list-style-type: none;

    @media ${device.small} {
      font-size: 16px;
      line-height: 17px;

      letter-spacing: -0.970036px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  `

  const StyledLink = styled.a`
    color: ${globalStyles.secondaryColor};
    text-decoration: underline !important;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -2.2528px;

    @media ${device.small} {
      font-size: 16px;
      line-height: 17px;

      letter-spacing: -0.970036px;
    }
  `

  return (
    <ProjectWrapper>
      <ProjectWrapperProject>
        <ProjectName>{props.name}</ProjectName>
        <ProjectSkills>
          {props.skills.map(skill => {
            const skillIndex = props.skills.indexOf(skill)

            return <li key={skillIndex}>{skill}</li>
          })}
        </ProjectSkills>
        <StyledLink
          href="https://rydoo.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ marginTop: "auto", paddingTop: "2rem" }}
        >
          → See project
        </StyledLink>
      </ProjectWrapperProject>
      <ProjectWrapperImage
        fluid={data.file.childImageSharp.fluid}
        alt="project-example"
      ></ProjectWrapperImage>
    </ProjectWrapper>
  )
}

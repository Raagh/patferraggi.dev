import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import globalStyles from "../../shared/global-styles"
import device from "../../shared/device"

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
    flex-direction: row-reverse;

    @media ${device.phone} {
      display: block;
    }
  `

  const ProjectWrapperImage = styled(Img)`
    width: 80%;
    height: auto;
    max-width: 600px;
    z-index: 1;

    @media ${device.phone} {
      width: 100%;
    }
  `

  const ProjectWrapperProject = styled.div`
    padding-top: 2rem;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    font-family: ${globalStyles.fontFamilyRegular};
    justify-content: center;
    width: 50%;

    & a {
      padding-top: 1.5rem;
      color: ${globalStyles.primaryColor};
      line-height: 24px;
      font-size: 18px;
    }

    @media ${device.phone} {
      width: 100%;
    }
  `

  const ProjectName = styled.div`
    color: ${globalStyles.primaryColor};
    padding-bottom: 1rem;
  `

  const ProjectSkills = styled.ul`
    color: ${globalStyles.inactiveColor};
  `

  return (
    <ProjectWrapper>
      <ProjectWrapperImage
        fluid={data.file.childImageSharp.fluid}
        alt="project-example"
      ></ProjectWrapperImage>
      <ProjectWrapperProject>
        <ProjectName>{props.name}</ProjectName>
        <ProjectSkills>
          {props.skills.map(skill => {
            const skillIndex = props.skills.indexOf(skill)

            return (
              <li key={skillIndex} rel="nofollow">
                {skill}
              </li>
            )
          })}
        </ProjectSkills>
        <a href="https://rydoo.com" target="_blank" rel="noopener noreferrer">
          See project
        </a>
      </ProjectWrapperProject>
    </ProjectWrapper>
  )
}

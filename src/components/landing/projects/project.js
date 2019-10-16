import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/(png)/" }) {
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
    }
  `)

  return (
    <div className="project-container">
      <Img
        className="project-container__image"
        fluid={data.file.childImageSharp.fluid}
        alt="project-example"
      ></Img>
      <div className="project-container__project">
        <div className="project-container__name">{props.name}</div>
        <ul className="project-container__skills">
          {props.skills.map(skill => {
            const skillIndex = props.skills.indexOf(skill)

            return <li key={skillIndex}>{skill}</li>
          })}
        </ul>
        <a href="https://rydoo.com" target="_blank" rel="noopener noreferrer">
          See project
        </a>
      </div>
    </div>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { regex: "/(1)|(2)|(3)/" } }
        sort: { fields: name }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 600) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
          name
        }
      }
    }
  `)

  return (
    <section className="gallery-container">
      {data.allFile.nodes.map(x => (
        <Img
          className="gallery-container__image"
          fluid={x.childImageSharp.fluid}
          alt={x.name}
          key={x.name}
        ></Img>
      ))}
    </section>
  )
}

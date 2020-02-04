import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import device from "../../config/device"

const GalleryWrapperImage = styled(Img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  padding: 0 0 0.5rem 0;
`

const GalleryWrapper = styled.section`
  margin-bottom: 5rem;
  z-index: 1;
  display: flex;
  flex-direction: row;

  @media ${device.small} {
    margin-bottom: 0;
    flex-direction: column;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { regex: "/(gallery-1)|(gallery-2)|(gallery-3)/" }
          relativeDirectory: { eq: "images" }
        }
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
    <GalleryWrapper>
      {data.allFile.nodes.map(x => (
        <GalleryWrapperImage
          fluid={x.childImageSharp.fluid}
          alt={x.name}
          key={x.name}
        ></GalleryWrapperImage>
      ))}
    </GalleryWrapper>
  )
}

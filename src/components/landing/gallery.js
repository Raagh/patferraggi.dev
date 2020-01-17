import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import device from "../shared/device"

const GalleryWrapperImage = styled(Img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  position: absolute !important;
  padding: 0 0 0.5rem 0;

  @media ${device.phone} {
    position: relative !important;
  }

  @media ${device.forBigDesktopDownExceptMobile} {
    position: relative !important;
    min-width: 0;
  }
`

const GalleryWrapper = styled.section`
  grid-area: gallery;
  padding-top: 3rem;
  margin-bottom: 5rem;
  position: relative;
  height: 62.5rem;
  z-index: 1;

  ${GalleryWrapperImage}:nth-of-type(1) {
    left: 1%;
  }

  ${GalleryWrapperImage}:nth-of-type(2) {
    top: 19%;
    right: 0%;
  }

  ${GalleryWrapperImage}:nth-of-type(3) {
    top: 50%;
    right: 30%;
  }

  @media ${device.phone} {
    padding: 3rem 0 0 0;
    height: auto;
    margin-bottom: 0;

    ${GalleryWrapperImage}:nth-of-type(1) {
      left: 0%;
    }

    ${GalleryWrapperImage}:nth-of-type(2) {
      top: 0%;
      right: 0%;
    }

    ${GalleryWrapperImage}:nth-of-type(3) {
      top: 0%;
      right: 0%;
    }
  }

  @media ${device.forBigDesktopDownExceptMobile} {
    height: auto;
    margin-bottom: 0;
    padding: 3rem 0 0 0;
    display: flex;

    ${GalleryWrapperImage}:nth-of-type(1) {
      left: 0%;
    }

    ${GalleryWrapperImage}:nth-of-type(2) {
      top: 0%;
      right: 0%;
    }

    ${GalleryWrapperImage}:nth-of-type(3) {
      top: 0%;
      right: 0%;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { regex: "/(gallery-1)|(gallery-2)|(gallery-3)/" } relativeDirectory: {eq: "images"}}
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

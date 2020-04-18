import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"

const Container = styled.div`
  display: flex;

  @media ${device.small} {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: ${globalStyles.fontFamilyRegular};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.5px;

  @media ${device.small} {
    width: 100%;
  }
`

const BioTitle = styled.span`
  font-family: ${globalStyles.fontFamilyMedium};
`

const BioPresentation = styled.p`
  opacity: 0.75;
`

const StyledAvatar = styled(Img)`
  width: 77px;
  height: 77px;
  margin-right: 2rem;
  margin-top: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 !important;
  }

  @media ${device.small} {
    margin: auto auto 2rem auto;
    width: 100px;
    height: 100px;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
  const { author, social } = data.site.siteMetadata
  return (
    <Container>
      <StyledAvatar fluid={data.avatar.childImageSharp.fluid} alt={author} />
      <TextContainer>
        <BioTitle>Hola, soy {author}</BioTitle>
        <BioPresentation>
          Soy un developer autodidacta Argentino que actualmente vive y trabaja
          en Bélgica. Intento mejorar diariamente, mientras ayudo a otros a
          hacer lo mismo.
          {` `}
        </BioPresentation>
        <a
          className="twitter-follow-button"
          href="https://twitter.com/patferraggi"
          data-show-count="false"
          data-size="large"
        >
          Seguir a @${social.twitter}
        </a>
      </TextContainer>
    </Container>
  )
}

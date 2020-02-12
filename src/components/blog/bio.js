import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <TextContainer>
              <div>
                <strong>{author}</strong>
              </div>
              <p>
                Soy un desarrollador autodidacta Argentino que actualmente vive
                y trabaja en Bélgica. Intento mejorar diariamente para
                convertirme en un mejor desarrollador, mientras ayudo a otros a
                hacer lo mismo.
                {` `}
              </p>
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
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
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
`

const Container = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Bio

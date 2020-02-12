import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import styled from "styled-components"

export default () => {
  const data = useStaticQuery(graphql`
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
  `)
  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <div>
        <strong>{author}</strong>
      </div>
      <p>
        Soy un desarrollador autodidacta Argentino que actualmente vive y
        trabaja en Bélgica. Intento mejorar diariamente para convertirme en un
        mejor desarrollador, mientras ayudo a otros a hacer lo mismo.
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
    </div>
  )
}

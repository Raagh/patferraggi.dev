import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"

const BlogListTemplateHeader = styled.section`
  width: 100%;
`

const BlogListTemplateTitle = styled.p`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  margin-top: 1rem;

  @media ${device.small} {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
    margin-top: 0;
  }
`

const BlogListTemplateSubtitle = styled.p`
  font-size: 24px;
  line-height: 64px;
  letter-spacing: -1px;
  opacity: 0.5;
  margin-bottom: 3rem;

  @media ${device.small} {
    line-height: 30px;
    letter-spacing: -1px;
    margin-top: 1rem;
  }
`

const HighLightedText = styled.span`
  color: ${globalStyles.secondaryColor};
`

const BlogListMainArticle = styled.article`
  display: flex;
  flex-direction: row;
  background: ${globalStyles.primaryColor};
  color: ${globalStyles.backgroundColor};
  min-height: 458px;
  padding: 3rem;

  @media ${device.small} {
    flex-direction: column-reverse;
    padding: 1rem;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 2rem;
    width: 100%;
    min-height: 100%;
  }
`

const BlogListMainArticleTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;

  @media ${device.small} {
    font-size: 1.5em;
    line-height: 30px;
  }

  @media ${device.medium} {
    font-size: 1.5em;
    line-height: 30px;
  }

  @media ${device.large} {
    font-size: 1.5em;
    line-height: 30px;
  }
`

const BlogListMainArticleText = styled.div`
  width: 50%;
  margin-right: 4.5rem;
  display: flex;
  flex-direction: column;

  @media ${device.small} {
    width: 100%;
    margin-right: 0;
  }
`

const BlogListMainArticleExcerpt = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  margin-bottom: 4rem;

  @media ${device.small} {
    margin-bottom: 2rem;
    line-height: 20px;
  }

  @media ${device.medium} {
    margin-bottom: 2rem;
    line-height: 20px;
  }

  @media ${device.large} {
    margin-bottom: 2rem;
    line-height: 20px;
  }
`

const StyledDescription = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  margin-top: 1rem;

  @media ${device.small} {
    line-height: 20px;
  }

  @media ${device.medium} {
    line-height: 20px;
  }

  @media ${device.large} {
    line-height: 20px;
  }
`

const BlogListMainArticleDate = styled.small`
  margin-top: auto;
`

const StyledGatsbyLinkMainArticle = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.backgroundColor};

  :hover {
    color: ${globalStyles.secondaryColor};
  }
`

const StyledLink = styled.a`
  color: ${globalStyles.primaryColor};
  text-decoration: underline !important;
  opacity: 0.5;
`

const StyledImg = styled(Img)`
  width: 50%;

  @media ${device.small} {
    height: 150px;
    width: 100%;
    margin-bottom: 2rem;
  }
`

const NewHeader = styled.p`
  font-family: ${globalStyles.fontFamilyMedium};
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 2rem;

  path {
    fill: ${globalStyles.backgroundColor};
  }

  @media ${device.small} {
    line-height: 20px;
    margin-bottom: 1rem;
  }
`

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
        edges {
          node {
            excerpt
            timeToRead
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY", locale: "es")
              title
              description
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const mainPost = data.allMdx.edges[0].node

  return (
    <BlogListTemplateHeader>
      <BlogListTemplateTitle>
        Bienvenido al{" "}
        <HighLightedText>Calabozo del Programador</HighLightedText>
      </BlogListTemplateTitle>
      <BlogListTemplateSubtitle>
        visit{" "}
        <StyledLink
          href="https://dev.to/patferraggi"
          target="_blank"
          rel="noopener noreferrer"
        >
          devto/patferraggi
        </StyledLink>{" "}
        for the english version
      </BlogListTemplateSubtitle>
      {props.shouldDisplayMainArticle && (
        <BlogListMainArticle>
          <BlogListMainArticleText>
            <NewHeader>&#x2605; NUEVO</NewHeader>
            <BlogListMainArticleTitle>
              <StyledGatsbyLinkMainArticle to={`blog${mainPost.fields.slug}`}>
                {mainPost.frontmatter.title || mainPost.fields.slug}
              </StyledGatsbyLinkMainArticle>
              <StyledDescription>
                {mainPost.frontmatter.description}
              </StyledDescription>
            </BlogListMainArticleTitle>
            <BlogListMainArticleExcerpt
              dangerouslySetInnerHTML={{
                __html: mainPost.excerpt,
              }}
            ></BlogListMainArticleExcerpt>
            <BlogListMainArticleDate>
              {mainPost.frontmatter.date} - {mainPost.timeToRead + 1} minutos de
              lectura
            </BlogListMainArticleDate>
          </BlogListMainArticleText>
          <StyledGatsbyLinkMainArticle
            to={`blog${mainPost.fields.slug}`}
          ></StyledGatsbyLinkMainArticle>
          <StyledImg
            imgStyle={{ objectFit: "cover" }}
            fluid={mainPost.frontmatter.thumbnail.childImageSharp.fluid}
          ></StyledImg>
        </BlogListMainArticle>
      )}
    </BlogListTemplateHeader>
  )
}

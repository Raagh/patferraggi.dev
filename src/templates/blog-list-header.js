import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import globalStyles from "../config/style-variables"
import IcomoonReact from "icomoon-react"
import iconSet from "../../content/assets/icons/selection.json"

const BlogListTemplateHeader = styled.section`
  width: 100%;
`

const BlogListTemplateTitle = styled.p`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  margin-top: 1rem;
`

const BlogListTemplateSubtitle = styled.p`
  font-size: 24px;
  line-height: 64px;
  letter-spacing: -1px;
  opacity: 0.5;
  margin-bottom: 3rem;
`

const HighLightedText = styled.span`
  color: ${globalStyles.secondaryColor};
`

const BlogListMainArticle = styled.article`
  display: flex;
  flex-direction: row;
  background: ${globalStyles.primaryColor};
  color: ${globalStyles.backgroundColor};
  height: 458px;
  padding: 3rem;
`

const BlogListMainArticleTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
`

const BlogListMainArticleText = styled.div`
  width: 50%;
  margin-right: 4.5rem;
  display: flex;
  flex-direction: column;
`

const BlogListMainArticleExcerpt = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  margin-bottom: 4rem;
`

const BlogListMainArticleDate = styled.small`
  margin-top: auto;
`

const StyledGatsbyLinkMainArticle = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.backgroundColor};
`

const StyledLink = styled.a`
  color: ${globalStyles.primaryColor};
  text-decoration: underline !important;
  opacity: 0.5;
`

const StyledImg = styled(Img)`
  width: 50%;
`

const NewHeader = styled.p`
  font-family: ${globalStyles.fontFamilyMedium};
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 2rem;

  path {
    fill: ${globalStyles.backgroundColor};
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
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              thumbnail {
                childImageSharp {
                  fluid {
                    src
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
        <HighLightedText>Calabozo del programador</HighLightedText>
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
            <NewHeader>
              {<IcomoonReact iconSet={iconSet} size={"1em"} icon="cup" />} NUEVO
            </NewHeader>
            <BlogListMainArticleTitle>
              <StyledGatsbyLinkMainArticle to={`blog${mainPost.fields.slug}`}>
                {mainPost.frontmatter.title || mainPost.fields.slug}
              </StyledGatsbyLinkMainArticle>
            </BlogListMainArticleTitle>
            <BlogListMainArticleExcerpt
              dangerouslySetInnerHTML={{
                __html: mainPost.excerpt,
              }}
            ></BlogListMainArticleExcerpt>
            <BlogListMainArticleDate>
              {mainPost.frontmatter.date}
            </BlogListMainArticleDate>
          </BlogListMainArticleText>
          <StyledImg
            imgStyle={{ objectFit: "fill" }}
            fluid={mainPost.frontmatter.thumbnail.childImageSharp.fluid}
          ></StyledImg>
        </BlogListMainArticle>
      )}
    </BlogListTemplateHeader>
  )
}

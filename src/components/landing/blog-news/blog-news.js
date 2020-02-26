import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import IcomoonReact from "icomoon-react"
import device from "../../../config/device"
import styleVariables from "../../../config/style-variables"
import Article from "./blog-news-article"
import iconSet from "../../../../content/assets/icons/selection.json"

const BlogNewsWrapper = styled.section`
  border: 2px solid ${styleVariables.primaryColor};
  font-family: ${styleVariables.fontFamilyMedium};

  @media ${device.small} {
    border: 1px solid ${styleVariables.primaryColor};
  }
`

const BlogNewsHeader = styled.header`
  background: ${styleVariables.primaryColor};
  color: ${styleVariables.backgroundColor};
  display: flex;
  flex-direction: row;
  letter-spacing: -2.2528px;
  font-weight: 500;
  font-style: normal;
  padding: 1rem 3rem 1rem 3rem;

  @media ${device.small} {
    padding: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    letter-spacing: -1.5px;
  }
`
const StyledHeaderLink = styled.a`
  color: ${styleVariables.secondaryColor};
  text-decoration: underline !important;
`

const HeaderShowOff = styled.p`
  font-size: 54px;
  line-height: 120px;
  padding-right: 30%;

  @media ${device.small} {
    padding-bottom: 2rem;
    font-size: 24px;
    line-height: 30px;
  }

  @media ${device.medium} {
    font-size: 32px;
    line-height: 38px;
    padding-right: 0;
    width: 70%;
    align-self: center;
  }

  @media ${device.large} {
    font-size: 32px;
    line-height: 38px;
    padding-right: 0;
    width: 50%;
    align-self: center;
  }
`

const HeaderExplanation = styled.div`
  font-size: 32px;
  line-height: 38px;
  align-self: center;

  @media ${device.small} {
    align-self: flex-start;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.904507px;
  }

  @media ${device.medium} {
    align-self: flex-start;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.904507px;
  }

  @media ${device.large} {
    align-self: flex-start;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.904507px;
  }
`

const BlogNewsArticles = styled.section`
  display: flex;
  flex-direction: row;
  padding: 3rem;

  @media ${device.small} {
    padding: 1rem;
    flex-direction: column;
  }

  @media ${device.medium} {
    padding: 1rem;
    flex-direction: column;
  }

  @media ${device.large} {
    padding: 1rem;
    flex-direction: column;
  }
`

const isMediaQueryLargeOrExtraLarge =
  typeof window !== `undefined`
    ? window.matchMedia(device.large).matches ||
      window.matchMedia(device.xlarge).matches
    : false

export default () => {
  const articles = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY", locale: "es")
              title
              description
            }
          }
        }
      }
    }
  `).allMdx.edges

  return (
    <BlogNewsWrapper id="blog">
      <BlogNewsHeader>
        <HeaderShowOff>
          {<IcomoonReact iconSet={iconSet} size={"1em"} icon="face" />} {"  "}I
          have a Blog
        </HeaderShowOff>
        <HeaderExplanation>
          <p>
            ¿En Español?{" "}
            <StyledHeaderLink href="/blog" rel="noopener noreferrer">
              Por aquí.
            </StyledHeaderLink>
          </p>
          <p>
            Or find me on{" "}
            <StyledHeaderLink
              href="https://dev.to/patferraggi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev.to
            </StyledHeaderLink>{" "}
            for English articles.
          </p>
        </HeaderExplanation>
      </BlogNewsHeader>
      <BlogNewsArticles>
        {articles.map(item => {
          const node = item.node
          const articleIndex = articles.indexOf(item)
          return (
            <Article
              id={articleIndex}
              title={node.frontmatter.title}
              link={`/blog` + node.fields.slug}
              showPreview={articleIndex === 0}
              small={articleIndex === 1 && isMediaQueryLargeOrExtraLarge}
              creationDate={node.frontmatter.date}
              description={node.frontmatter.description}
            />
          )
        })}
      </BlogNewsArticles>
    </BlogNewsWrapper>
  )
}

import React from "react"
import Article from "./article"
import styled from "styled-components"
import device from "../../shared/device"
import globalStyles from "../../shared/global-styles"
import { useStaticQuery, graphql } from "gatsby"

const BlogNewsWrapper = styled.div`
  grid-area: blog-news;
  font-size: 64px;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  padding-top: 1.5rem;

  @media ${device.phone} {
    font-size: 32px;
    line-height: 32px;
  }
`

const BlogNewsText = styled.p`
  width: 90%;

  @media ${device.phone} {
    width: 100%;
  }
`

const BlogNewsLink = styled.a`
  color: ${globalStyles.secondaryColor};
`

const BlogNewsArticles = styled.section`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;

  @media ${device.phone} {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`

export default () => {
  const articles = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            }
          }
        }
      }
    }
  `).allMdx.edges

  return (
    <BlogNewsWrapper id="blog">
      <BlogNewsText>
        I also have a blog, you can read it in Spanish
        <BlogNewsLink href="/blog"> here</BlogNewsLink> or in English on
        <BlogNewsLink href="https://dev.to/patferraggi"> Dev.to</BlogNewsLink>
      </BlogNewsText>
      <BlogNewsText>These are my latest blog posts:</BlogNewsText>
      <BlogNewsArticles>
        {articles.slice(0, 3).map(item => {
          const node = item.node
          const articleIndex = articles.indexOf(item)
          const isLastElement = true

          return (
            <Article
              key={articleIndex}
              title={node.frontmatter.title}
              link={`/blog` + node.fields.slug}
              isActive={articleIndex === 0}
              creationDate={node.frontmatter.date}
              addDivider={isLastElement}
            />
          )
        })}
      </BlogNewsArticles>
    </BlogNewsWrapper>
  )
}

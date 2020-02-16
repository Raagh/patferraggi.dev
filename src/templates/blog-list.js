import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/shared/layout"
import BlogListTemplateHeader from "../components/blog/blog-list-header"
import BlogListArticlesDisplay from "../components/blog/blog-list-articles-display"
import globalStyles from "../config/style-variables"

const BlogListTemplateWrapper = styled.section`
  font-family: ${globalStyles.fontFamilyMedium};
  font-weight: 500;
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};
`

const StyledHomeLink = styled(StyledGatsbyLink)`
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -1px;
  font-family: ${globalStyles.fontFamilyRegular};
`

const StyledButton = styled.button`
  width: 216px;
  height: 54px;
  font-size: 24px;
  line-height: 28px;
  font-family: ${globalStyles.fontFamilyMedium};
  letter-spacing: -1px;
`

class BlogListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

    const posts = data.allMdx.edges

    return (
      <Layout>
        <BlogListTemplateWrapper>
          <BlogListTemplateHeader
            shouldDisplayMainArticle={currentPage !== 2}
          ></BlogListTemplateHeader>
          <BlogListArticlesDisplay posts={posts}></BlogListArticlesDisplay>
        </BlogListTemplateWrapper>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "4rem",
            marginTop: "4.5rem",
          }}
        >
          {!isFirst && (
            <StyledButton>
              <Link
                to={prevPage}
                rel="prev"
                style={{
                  textDecoration: "none",
                  color: `${globalStyles.backgroundColor}`,
                }}
              >
                ← Anterior
              </Link>
            </StyledButton>
          )}
          {!isLast && (
            <StyledButton>
              <Link
                to={nextPage}
                rel="next"
                style={{
                  textDecoration: "none",
                  color: `${globalStyles.backgroundColor}`,
                }}
              >
                Siguiente →
              </Link>
            </StyledButton>
          )}
        </ul>
        <StyledHomeLink to="/">← Back to my website</StyledHomeLink>
      </Layout>
    )
  }
}

export default BlogListTemplate

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
                fixed(width: 350, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

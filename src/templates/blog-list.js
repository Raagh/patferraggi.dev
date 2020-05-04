import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/shared/layout"
import BlogListTemplateHeader from "../components/blog/blog-list-header"
import BlogListArticlesDisplay from "../components/blog/blog-list-articles-display"
import globalStyles from "../config/style-variables"
import SEO from "../components/shared/seo"
import SubscribeModal from "../components/blog/modal"

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

const BackNextButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 4.5rem;
`

const StyledDirectionButton = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.backgroundColor};
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
        <SEO title="El Calabozo del Programador"></SEO>
        <BlogListTemplateWrapper>
          <BlogListTemplateHeader
            shouldDisplayMainArticle={currentPage === 1}
          ></BlogListTemplateHeader>
          <BlogListArticlesDisplay posts={posts}></BlogListArticlesDisplay>
        </BlogListTemplateWrapper>
        <BackNextButtons>
          {!isFirst && (
            <StyledButton>
              <StyledDirectionButton to={prevPage} rel="prev">
                ← Anterior
              </StyledDirectionButton>
            </StyledButton>
          )}
          {!isLast && (
            <StyledButton>
              <StyledDirectionButton to={nextPage} rel="next">
                Siguiente →
              </StyledDirectionButton>
            </StyledButton>
          )}
        </BackNextButtons>
        <StyledHomeLink to="/">← Back to my website</StyledHomeLink>
        <SubscribeModal></SubscribeModal>
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
`

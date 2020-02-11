import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/shared/layout"
import Button from "../components/blog/button"
import styled from "styled-components"
import globalStyles from "../config/style-variables"
import Img from "gatsby-image"

const BlogListTemplateWrapper = styled.section`
  font-family: ${globalStyles.fontFamilyMedium};
  font-weight: 500;
`
const BlogListTemplateTitle = styled.p`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
`
const HighLightedText = styled.span`
  color: ${globalStyles.secondaryColor};
`

const BlogListMainArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${globalStyles.primaryColor};
  color: ${globalStyles.backgroundColor};
`

const BlogListMainArticleText = styled.div``

const BlogListArticle = styled.article`
  width: 25%;
`

const BlogListArticlesListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledGatsbyLinkMainArticle = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.backgroundColor};
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};
`

class BlogListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const mainPost = data.allMdx.edges.shift().node
    const restOfPosts = data.allMdx.edges
    // const { currentPage, numPages } = this.props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage =
    //   currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
    // const nextPage = "/blog/" + (currentPage + 1).toString()

    return (
      <Layout>
        <BlogListTemplateWrapper>
          <BlogListTemplateTitle>
            Bienvenido al{" "}
            <HighLightedText>Calaboso del programador</HighLightedText>
          </BlogListTemplateTitle>
          <BlogListMainArticle>
            <BlogListMainArticleText>
              <h3>
                <StyledGatsbyLinkMainArticle to={`blog${mainPost.fields.slug}`}>
                  {mainPost.frontmatter.title || mainPost.fields.slug}
                </StyledGatsbyLinkMainArticle>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainPost.frontmatter.description || mainPost.excerpt,
                }}
              />
              <small>{mainPost.frontmatter.date}</small>
            </BlogListMainArticleText>
            <Img fixed={mainPost.frontmatter.thumbnail.childImageSharp.fixed} />
          </BlogListMainArticle>
          <BlogListArticlesListWrapper>
            {restOfPosts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <BlogListArticle key={node.fields.slug}>
                  <Img
                    fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                  />
                  <h3>
                    <StyledGatsbyLink to={`blog${node.fields.slug}`}>
                      {title}
                    </StyledGatsbyLink>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </BlogListArticle>
              )
            })}
          </BlogListArticlesListWrapper>
        </BlogListTemplateWrapper>
        {/* <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Anterior
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Siguiente →
            </Link>
          )}
        </ul> */}
        <Link to="/">
          <Button marginTop="85px">Home</Button>
        </Link>
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
                fixed(width: 300, height: 300) {
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

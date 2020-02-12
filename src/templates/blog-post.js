import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import styled from "styled-components"
import globalStyles from "../config/style-variables"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Divider from "../components/shared/divider"
import Bio from "../components/blog/bio"

const ArticleWrapper = styled.section`
  font-family: ${globalStyles.fontFamilyMedium};
  font-weight: 500;
`

const ArticleTitle = styled.h2`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -1px;
  width: 60%;
  margin-bottom: 3rem;
`

const ArticleDate = styled.span`
  font-size: 14px;
  line-height: 32px;
  opacity: 0.5;
`

const StyledCover = styled(Img)`
  width: 90%;
  margin: auto;
  height: 475px;
  margin-top: 100px;
`

const ArticleContent = styled.article`
  background: linear-gradient(to bottom, #20202c 3%, #eaeae4 3%);
  color: ${globalStyles.backgroundColor};
`

const ArticleContentText = styled.article`
  padding: 3rem 17rem 6rem 17rem;
  font-family: ${globalStyles.fontFamilyRegular};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.5px;

  p {
    margin-bottom: 1em;
  }

  img,
  pre {
    display: block;
    margin: 3.5rem auto 3.5rem auto;
  }

  hr {
    margin-bottom: 2em;
  }

  a {
    text-decoration: underline;
    color: ${globalStyles.secondaryColor};
  }
`

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const twttr = window.twttr
    if (typeof twttr.widgets !== "undefined") {
      twttr.widgets.load()
    }
  }

  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    let disqusConfig = {
      identifier: post.id,
      title: post.title,
    }

    return (
      <Layout>
        <ArticleWrapper>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
          <ArticleDate>{post.frontmatter.date}</ArticleDate>
          <Divider></Divider>
          <ArticleContent>
            <StyledCover
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <ArticleContentText>
              <MDXRenderer>{post.body}</MDXRenderer>
              <hr />
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={`blog${previous.fields.slug}`} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`blog${next.fields.slug}`} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
              <Bio></Bio>
            </ArticleContentText>
          </ArticleContent>
          <CommentCount config={disqusConfig} />
          <Disqus config={disqusConfig} />
        </ArticleWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`

import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import styled from "styled-components"
import globalStyles from "../config/style-variables"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Divider from "../components/shared/divider"
import BlogPostShowcaseWrapper from "../components/blog/blog-post-showcase-wrapper"
// import Bio from "../components/blog/bio"

const ArticleWrapper = styled.section`
  font-family: ${globalStyles.fontFamilyMedium};
  font-weight: 500;
`

const ArticleTitle = styled.h2`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -1px;
  width: 60%;
  margin-bottom: 2rem;
  margin-top: 2rem;
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
`

const ArticleContent = styled.article`
  background: linear-gradient(to bottom, #20202c 3%, #eaeae4 3%);
  color: ${globalStyles.backgroundColor};
  max-width: 1260px;
  margin-right: auto;
`

const StyledHomeLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};
  font-size: 14px;
  line-height: 28px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -1px;
  font-family: ${globalStyles.fontFamilyRegular};
`

const ArticleContentText = styled.article`
  padding: 3rem 0 6rem 0;
  font-family: ${globalStyles.fontFamilyRegular};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.5px;
  max-width: 44.5rem;
  margin-right: auto;
  margin-left: auto;

  p {
    margin-bottom: 2rem;
  }

  img,
  pre {
    max-width: 100%;
    display: block;
    margin: 3.5rem auto 3.5rem auto;
  }

  hr {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${globalStyles.secondaryColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }

  ul {
    margin-bottom: 1.5rem;
  }

  ol {
    list-style-type: none;
  }

  ol li {
    counter-increment: count-me;
  }

  ol li::before {
    content: counter(count-me) ". ";
    display: block;
    position: relative;
    max-width: 0px;
    max-height: 0px;
    left: -1.3em;
    color: ${globalStyles.secondaryColor};
    font-weight: bold;
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
    // const { previous, next } = this.props.pageContext

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
          <StyledHomeLink to="/blog">← Back to my blog</StyledHomeLink>
          <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
          <ArticleDate>{post.frontmatter.date}</ArticleDate>
          <Divider small={true} maxWidth={"1260px"}></Divider>
          <ArticleContent>
            <StyledCover
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <ArticleContentText>
              <MDXRenderer>{post.body}</MDXRenderer>
              <Divider small={true}></Divider>
              <CommentCount config={disqusConfig} />
              <Disqus config={disqusConfig} />
              {/* <Bio></Bio> */}
            </ArticleContentText>
          </ArticleContent>
        </ArticleWrapper>
        {/* <hr />
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
        </ul> */}
        <BlogPostShowcaseWrapper></BlogPostShowcaseWrapper>
        <StyledHomeLink to="/blog">← Back to my blog</StyledHomeLink>
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

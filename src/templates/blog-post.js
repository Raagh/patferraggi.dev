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
import BlogListArticlesDisplay from "../components/blog/blog-list-articles-display"
import Bio from "../components/blog/bio"
import device from "../config/device"

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

  @media ${device.small} {
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
  }

  @media ${device.medium} {
    width: 100%;
  }

  @media ${device.large} {
    width: 100%;
  }
`

const ArticleDate = styled.span`
  font-size: 14px;
  line-height: 32px;
  opacity: 0.5;
`

const StyledHomeLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -1px;
  font-family: ${globalStyles.fontFamilyRegular};
`

const BlogPostShowcaseWrapperTitle = styled.p`
  font-family: ${globalStyles.fontFamilyMedium};
  color: ${globalStyles.primaryColor};
  margin-top: 4rem;
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
`

const StyledCover = styled(Img)`
  width: 90%;
  margin: auto;
  height: 475px;

  img {
    object-fit: fill !important;
  }

  @media ${device.small} {
    height: 300px;
  }
`

const CoverContent = styled.article`
  background: linear-gradient(to bottom, #20202c 40%, #eaeae4 40%);
  color: ${globalStyles.backgroundColor};
  max-width: 1260px;
  margin-right: auto;
`

const ArticleContent = styled.article`
  background: ${globalStyles.primaryColor};
  color: ${globalStyles.backgroundColor};
  max-width: 1260px;
  margin-right: auto;
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
    line-height: 32px;
  }

  ul {
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 1rem;
    margin-left: 1.2rem;
  }

  @media ${device.small} {
    font-size: 16px;
    line-height: 20px;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media ${device.medium} {
    padding-right: 2rem;
    padding-left: 2rem;
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
    const posts = this.props.data.allMdx.edges

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
          <CoverContent>
            <StyledCover
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
          </CoverContent>
          <ArticleContent>
            <ArticleContentText>
              <MDXRenderer>{post.body}</MDXRenderer>
              <Divider
                small={true}
                maxWidth={"44.5rem"}
                color={globalStyles.backgroundColor}
              ></Divider>
              <Bio></Bio>
              <Divider
                small={true}
                maxWidth={"44.5rem"}
                color={globalStyles.backgroundColor}
              ></Divider>
              <CommentCount config={disqusConfig} />
              <Disqus config={disqusConfig} />
            </ArticleContentText>
          </ArticleContent>
        </ArticleWrapper>
        <BlogPostShowcaseWrapperTitle>
          Más artículos
        </BlogPostShowcaseWrapperTitle>

        <BlogListArticlesDisplay posts={posts}></BlogListArticlesDisplay>
        <StyledHomeLink to="/blog">← Back to my blog</StyledHomeLink>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $date: Date!) {
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      filter: { frontmatter: { date: { lt: $date } } }
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

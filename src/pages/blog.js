import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/blog/bio"
import SEO from "../components/blog/seo"
import Layout from "../components/blog/layout"
import Button from "../components/blog/button"
import { rhythm } from "../utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle =
      "Estas entrando al Calabozo del Desarrollador, cuida tus pasos"
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todos los artículos" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
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
`

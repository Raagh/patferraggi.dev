import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogListArticlesDisplay from "./blog-list-articles-display"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
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
  `)

  const posts = data.allMdx.edges

  return <BlogListArticlesDisplay posts={posts}></BlogListArticlesDisplay>
}

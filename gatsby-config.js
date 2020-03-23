module.exports = {
  siteMetadata: {
    title: `Patricio Ferraggi Ares`,
    author: `Patricio Ferraggi Ares`,
    description: `Personal website and blog`,
    siteUrl: "https://www.patferraggi.dev",
    social: {
      twitter: `patferraggi`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title:
                    edge.node.frontmatter.title +
                    (edge.node.frontmatter.description
                      ? ` - ${edge.node.frontmatter.description}`
                      : ``),
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  enclosure: {
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.thumbnail.childImageSharp.fluid.src,
                  },
                  url:
                    site.siteMetadata.siteUrl + `/blog` + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + `/blog` + edge.node.fields.slug,
                  // custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY", locale: "es")
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
                }
              }
            `,
            output: "/rss.xml",
            title: "patferraggi.dev RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://dev.us19.list-manage.com/subscribe/post?u=81a98730323f5c96d515ece6c&amp;id=5f60739269",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-153647126-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patricio Ferraggi Ares`,
        short_name: `Patricio Ferraggi`,
        start_url: `/`,
        icon: `content/assets/images/pfa-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `patferraggi`,
      },
    },
  ],
}

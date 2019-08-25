/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.patferraggi.dev",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-image",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
  ],
}

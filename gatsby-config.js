/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "StablePay",
    titleTemplate: "%s |Open source crypto social payment protocol",
    description: "Open source crypto social payment protocol",
    author: "Stablepay",
    image: "/metaTagImageLogo.svg",
    siteUrl: "https://twitter.com/StablePay",
    twitterUsername: "@stablepay",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}

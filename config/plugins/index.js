const siteMetadata = require("../siteMetadata")

const plugins = [
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: siteMetadata.siteUrl,
    },
  },
  {
    resolve: `gatsby-plugin-react-helmet`,
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/../../src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-layout`,
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      background_color: siteMetadata.backgroundColor,
      display: siteMetadata.display,
      icon: siteMetadata.icon,
      name: siteMetadata.title,
      short_name: siteMetadata.shortName,
      start_url: siteMetadata.startUrl,
      theme_color: siteMetadata.themeColor,
    },
  },
  {
    resolve: `gatsby-plugin-material-ui`,
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Overpass`,
          subsets: [`latin`],
          variants: [`400`, `700`],
        },
      ],
    },
  },
  { resolve: `gatsby-plugin-sharp` },
  { resolve: `gatsby-transformer-sharp` },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

module.exports = plugins

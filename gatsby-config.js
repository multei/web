module.exports = {
  siteMetadata: {
    title: `Multei!`,
    description: `Aqui você pode fazer sua denúncia contra estacionamento irregular em vagas de pessoas com deficiência, grávidas e pessoas idosas.`,
    author: `@multeiapp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F6F4F3`,
        theme_color: `#0069AE`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-transformer-sharp` },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

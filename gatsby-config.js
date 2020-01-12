module.exports = {
  siteMetadata: {
    title: `Web Consulting Portfolio`,
    description: `Web Consulting Portfolio`,
    author: `Mouaad Boukiaou`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Consulting Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
      },
    },
  ],
}

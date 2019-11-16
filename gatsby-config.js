/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `destiny'Note`,
    description: `note front end technology`,
    author: `destiny`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModile: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    // `gatsby-theme-docz`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Destiny'Note`,
        short_name: `Destiny`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `static/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

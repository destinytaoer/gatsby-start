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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `red`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
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

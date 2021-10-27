// In your gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-mdx",
    `gatsby-transformer-sharp`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
        ]
      }
    },
  ]
}


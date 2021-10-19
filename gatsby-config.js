// In your gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-mdx",

  ],
}

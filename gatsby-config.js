// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Trang Nguyen`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-mdx-source-name` ,

  ],
}
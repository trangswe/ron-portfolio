import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog | Trang">
      <h1>I write about/ translate random stuffs that interest me.</h1>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <p>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(filter: {fields: {source: {eq: "blog"}}}) {
    nodes {
      frontmatter {
        title
      }
      slug
      body
    }
  }
}
`

export default BlogPage
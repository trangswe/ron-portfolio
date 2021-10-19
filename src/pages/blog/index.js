import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout.js'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <h1>I write about random things that interest me.</h1>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query  {
  allMdx {
    nodes {
      frontmatter {
        title
      }
    }
  }
}
`

export default BlogPage
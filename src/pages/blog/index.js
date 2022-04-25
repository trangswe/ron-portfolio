import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog | Trang">
      <h1>I write about random stuffs that interest me.</h1>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <p>
              <Link to={`/${node.slug}`}>
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog| Trang">
      {
        data.allMdx.nodes.map(node => (
            <h2>
              <Link to={`${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
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
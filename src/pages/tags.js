import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => {
  const { tags } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Tags" />
      <h2>{tags.length} Tags</h2>
      <ul>
        {tags.map(tag => {
          return (
            <li key={tag.name}>
              <Link to={`tags/${kebabCase(tag.name)}`}>
                {tag.name}-({tag.totalCount})
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`

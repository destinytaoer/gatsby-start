import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => {
  const { categories } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Categories" />
      <h2>{categories.length} Categories</h2>
      <ul>
        {categories.map(category => {
          return (
            <li key={category.name}>
              <Link to={`categories/${kebabCase(category.name)}`}>
                {category.name}-({category.totalCount})
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
      categories: group(field: frontmatter___categories) {
        name: fieldValue
        totalCount
      }
    }
  }
`

import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

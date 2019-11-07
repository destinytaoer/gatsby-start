import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>location: SHEN ZHEN</p>
      <p>Graduation: ShenZhen University</p>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

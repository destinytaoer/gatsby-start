import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: ${rhythm(2)};
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header
      css={css`
        margin-bottom: 1.5rem;
      `}
    >
      <Link
        to="/"
        css={css`
          text-shadow: none;
          background-image: none;
        `}
      >
        <Img fixed={data.file.childImageSharp.fixed}></Img>
        <h1
          css={css`
            display: inline;
          `}
        >
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <ListLink to="/tags">Tags</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
  )
}

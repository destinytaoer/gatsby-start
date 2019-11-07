import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
  )
}

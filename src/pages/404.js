import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'

export default () => (
  <div
    css={css`
      margin: ${rhythm(2)} auto;
    `}
  >
    <h3>404 Page Not Found</h3>
    <Link to="/">take me home</Link>
  </div>
)

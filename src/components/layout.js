import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Header from './header'

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 750px;
      padding: ${rhythm(1)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Header />
    {children}
  </div>
)

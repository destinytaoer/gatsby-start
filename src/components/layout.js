import React from 'react'
import Header from './header'
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Header headerText="Destiny'Note" />
    {children}
  </div>
)

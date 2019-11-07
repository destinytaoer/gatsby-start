import React from 'react'
import { Link } from 'gatsby'

export default props => {
  return (
    <div>
      <Link to="/">
        <h1>{props.headerText}</h1>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

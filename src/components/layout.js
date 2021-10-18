import * as React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/nav-bar'
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>
        <NavBar/>
        {children}
      </main>
    </div>
  )
}

export default Layout
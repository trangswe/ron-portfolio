import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              ./trang
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} activeClassname="active">
              projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText} activeClassname="active">
              blog
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout 
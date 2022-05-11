import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  topNav,
  navLinks,
  navLinkItem,
  navLinkText,
  center,
} from "./layout.module.css"

const Horizontal = () => {
  return <hr color="green"></hr>
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={topNav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>./trang</li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} activeClassname="active">
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText} activeClassname="active">
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
        <Horizontal></Horizontal>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout

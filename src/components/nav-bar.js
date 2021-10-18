import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './nav-bar.module.css'
const NavBar = () => {
  return (
    <nav>
      <ul className={navLinks} >
        <li className={navLinkItem}><Link to="/" className={navLinkText}>./trang</Link></li>
        <li className={navLinkItem}><Link to="/#projects" className={navLinkText}> projects</Link></li>
        <li className={navLinkItem}><Link to="/blog" className={navLinkText}> blog</Link></li>
        <li className={navLinkItem}><Link to="/contact" className={navLinkText}> contact</Link></li>
      </ul>
      </nav>  )
}

export default NavBar
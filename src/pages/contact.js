import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticImage } from "gatsby-plugin-image"

const Contact = ({ children }) => {
  return (
    <Layout pageTitle="Contact | Trang">
      <h1>Please send me an email and get in touch!</h1>
      <p>Email: <a href="mailto=trangtnguyen@outlook.com.vn">trangtnguyen@outlook.com.vn</a></p>
      <p>Social: <a href="https://github.com/trang17" target="_blank">Github</a>, <a href="https://vsco.co/trangtn0" target="_blank">VSCO</a>.</p>
    </Layout>
  )
}

export default Contact

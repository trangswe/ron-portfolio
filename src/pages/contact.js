import * as React from "react"
import Layout from '../components/layout'
import { container } from '../components/layout.module.css'
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact | Trang">
        <h1>Hi there. If you're here most likely I've applied for a job at your company. Hi :). Or have I gone viral?? If so I'd be a viral job applier 😎. Anw please shoot me an email and get in touch.</h1>
        <h2>Email: trang.swe@gmail.com</h2>
        <h2>Socials: <a href="https://github.com/trang17" target="_blank">Github</a>, <a href="https://vsco.co/trangtn0" target="_blank">VSCO</a>.
        </h2>
    </Layout>
  )
}

export default ContactPage
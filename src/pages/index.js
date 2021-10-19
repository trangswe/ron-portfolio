import * as React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import { 
  container,
  project
 } from '../components/layout.module.css'


const HomePage = () => {
  return (
      <Layout pageTitle="Projects | Trang" className="container">
        <h1>Hi there I'm Trang. I'm a software developer living in Lang Son. Sometimes I <Link to="/blog">write</Link> and <a href="https://vsco.co/trangtn0" target="_blank">take photos</a>. You can have a look at <a href="https://drive.google.com/file/d/1QViXhQVuN_mvNoFzg9DcopF4JlH5XEe_/view?usp=sharing" target="_blank">my CV</a>.
        </h1>
        <h2 id="projects">Projects</h2>
        <ul className="projectlist">
          <li>Harry Styles live</li>
          <li>Noice Save</li>
          <li>Dev Portfolio</li>
        </ul>
        <h2>Study Notes</h2>
        <ul>
          <li>Full Stack Open</li>
          <li>MIT 6.0001</li>
          <li>MIT SC.950</li>
          <li>MIT Missing Semester</li>
          <li>Open Book Project</li>
          <li>React JS Tic-tac-toe</li>
          <li>Django official get started tutorial</li>
        </ul>
      </Layout>
  )
}

export default HomePage
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticImage } from "gatsby-plugin-image"

const Projects = ({ children }) => {
  return (
    <Layout pageTitle="Projects | Trang">
      <h1>
        Hi, I'm Trang Nguyen. I'm a software developer and sometimes{" "}
        <a href="https://vsco.co/trangtn0"  target="_blank">taking photos</a>.
      </h1>
      <p>
        🥳 Two big projects that I'm proud of:
        <ul>
          <li>
            <Link to="/harriet">Harriet - Harry Styles Live</Link>| CSS, React,
            Python Django, SQLite, JestJS, AWS
          </li>
          <li>
            <Link to="/sam">Sam - The restaurant app</Link>| React, JestJS
          </li>
        </ul>
      </p>
      <p>
        👩‍🎓 Other learning projects:
        <ul>
          <li>
            <Link to="/harriet">Harriet - Harry Styles Live</Link>| CSS, React,
            Python Django, SQLite, JestJS, AWS
          </li>
          <li>
            <Link to="/sam">Sam - The restaurant app</Link>| React, JestJS
          </li>
        </ul>
      </p>
      <h1>I'm self-taught and here is my learning journey. </h1>
      <p>
        🍕 Computer science foundations 
        <ul>
          <li>
            <Link to="/harriet">Harriet - Harry Styles Live</Link>| CSS, React,
            Python Django, SQLite, JestJS, AWS
          </li>
          <li>
            <Link to="/sam">Sam - The restaurant app</Link>| React, JestJS
          </li>
        </ul>

      </p>
      <p>🍟 Programming basics 
      <ul>
          <li>
            <Link to="/harriet">Harriet - Harry Styles Live</Link>| CSS, React,
            Python Django, SQLite, JestJS, AWS
          </li>
          <li>
            <Link to="/sam">Sam - The restaurant app</Link>| React, JestJS
          </li>
        </ul>
    </p>
      <p>
        🌭 Full stack web development
        <ul>
          <li>
            <Link to="/harriet">Harriet - Harry Styles Live</Link>| CSS, React,
            Python Django, SQLite, JestJS, AWS
          </li>
          <li>
            <Link to="/sam">Sam - The restaurant app</Link>| React, JestJS
          </li>
        </ul>
      </p>
      <StaticImage layout="constrained" placeholder="blur" src='https://i.kym-cdn.com/entries/icons/mobile/000/028/021/work.jpg' alt='it aint much'></StaticImage>
    </Layout>
  )
}

export default Projects

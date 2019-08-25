import React from "react"
import Layout from "../components/layout"
import Intro from "../components/landing/intro"
import BlogNews from "../components/landing/blog-news/blog-news"
import About from "../components/landing/about"
import Gallery from "../components/landing/gallery"
import Projects from "../components/landing/projects/projects"
import Contact from "../components/landing/contact"
import Helmet from "../components/shared/helmet"
import "../_sass/external/reset.scss"
import "../_sass/index.scss"

export default () => (
  <Layout>
    <Helmet></Helmet>
    <Intro></Intro>
    <BlogNews></BlogNews>
    <About></About>
    <Gallery></Gallery>
    <Projects></Projects>
    <Contact></Contact>
  </Layout>
)

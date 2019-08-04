import React from "react"
import Layout from "../components/layout"
import Intro from "../components/landing/intro"
import BlogNews from "../components/landing/blog-news"
import About from "../components/landing/about"
import "../_sass/external/reset.scss"
import "../_sass/index.scss"

export default () => (
  <Layout>
    <Intro></Intro>
    <BlogNews></BlogNews>
    <About></About>
  </Layout>
)

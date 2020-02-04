import React from "react"
import Intro from "../components/landing/intro"
import Layout from "../components/shared/layout"
import Divider from "../components/shared/divider"
import BlogNews from "../components/landing/blog-news/blog-news"
import About from "../components/landing/about"

export default () => (
  <Layout>
    <Intro></Intro>
    <Divider></Divider>
    <BlogNews></BlogNews>
    <About></About>
  </Layout>
)

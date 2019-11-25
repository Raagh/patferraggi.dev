import React from "react"
import Intro from "../components/landing/intro"
import BlogNews from "../components/landing/blog-news/blog-news"
import About from "../components/landing/about"
import Gallery from "../components/landing/gallery"
import Projects from "../components/landing/projects/projects"
import Contact from "../components/landing/contact"
import Navbar from "../components/landing/navbar"
import Helmet from "../components/shared/helmet"
import "../_sass/index.scss"

export default () => (
  <main className="landing">
    <Navbar></Navbar>
    <Helmet></Helmet>
    <Intro></Intro>
    <BlogNews></BlogNews>
    <About></About>
    <Gallery></Gallery>
    <Projects></Projects>
    <Contact></Contact>
  </main>
)

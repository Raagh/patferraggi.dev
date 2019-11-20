import React from "react"
import Helmet from "../components/shared/helmet"
import Layout from "../components/shared/layout"
import Navbar from "../components/landing/navbar"
import "../_sass/external/reset.scss"
import "../_sass/404.scss"

const NotFoundPage = () => (
  <Layout innerClassName="not-found">
    <Helmet></Helmet>
    <Navbar></Navbar>
    <section class="not-found__message">
      <p>Hi, this page is not ready yet but it will be soon. Sorry</p>
    </section>
  </Layout>
)

export default NotFoundPage

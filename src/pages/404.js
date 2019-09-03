import React from "react"
import Layout from "../components/layout"
import Helmet from "../components/shared/helmet"
import "../_sass/external/reset.scss"
import "../_sass/index.scss"

const NotFoundPage = () => (
  <Layout>
    <Helmet></Helmet>
    <section className="intro">
      <p>Hi, this page is not ready yet but it will be soon. Sorry</p>
    </section>
  </Layout>
)

export default NotFoundPage

import React from "react"
import Helmet from "../components/shared/helmet"
import ArticlePreview from "../components/blog/article-preview"
import "../_sass/external/reset.scss"
import "../_sass/blog.scss"

const posts = [
  {
    slug: "slug",
    description: "description",
    title: "title",
    publishDate: "date",
    tags: ["#fakeTAG"],
  },
]

const Blog = () => (
  <main className="blog">
    <Helmet></Helmet>
    <section>
      <div className="hero">Blog</div>
      <div className="wrapper">
        <h2 className="section-headline">Recent articles</h2>
        <ul className="article-list">
          {posts.map(node => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  </main>
)

export default Blog

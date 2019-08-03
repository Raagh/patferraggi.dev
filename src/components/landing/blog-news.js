import React from "react"
import Article from "./article"

const articles = [{ title: "fakeTitle", creationDate: "SomeDate" }]

export default () => (
  <div className="blog-news">
    <p>I also have a blog, you can read</p>
    <p>
      it{" "}
      <a className="blog-news__link" href="/blog">
        here
      </a>
      , and these are the latest
    </p>
    <p>articles:</p>
    <section className="blog-news__articles">
      {articles.map(article => {
        return (
          <Article
            key={articles.indexOf(article)}
            title={article.title}
            creationDate={article.creationDate}
          />
        )
      })}
    </section>
  </div>
)

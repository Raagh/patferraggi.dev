import React from "react"
import Article from "./article"

const articles = [
  {
    title:
      "How I found a problem with Angular unit testing and decided to fix it myself.",
    isActive: true,
    creationDate: "July 1, 2019",
    link:
      "https://medium.com/@pattferraggi/how-i-found-a-problem-with-angular-unit-testing-and-decided-to-fix-it-myself-7c00b58d57a7",
  },
]

export default () => (
  <div id="blog" className="blog-news">
    <p className="blog-news__text">
      I also have a blog, you can read it{" "}
      <a className="blog-news__link" href="/blog">
        here
      </a>
      , and these are the latest articles:
    </p>
    <section className="blog-news__articles">
      {articles.map(article => {
        const articleIndex = articles.indexOf(article)
        const isLastElement = true

        return (
          <Article
            key={articleIndex}
            title={article.title}
            link={article.link}
            isActive={article.isActive}
            creationDate={article.creationDate}
            addDivider={isLastElement}
          />
        )
      })}
    </section>
  </div>
)

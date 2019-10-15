import React from "react"
import Article from "./article"

const articles = [
  {
    title:
      "How I found a problem with Angular unit testing and decided to fix it myself.",
    isActive: true,
    creationDate: "July 1, 2019",
    link:
      "https://medium.com/@patferraggi/how-i-found-a-problem-with-angular-unit-testing-and-decided-to-fix-it-myself-7c00b58d57a7",
  },
  {
    title: "Stop focusing on Programming Languages and Frameworks!",
    isActive: false,
    creationDate: "Sep 9, 2019",
    link:
      "https://medium.com/@patferraggi/stop-focusing-on-programming-languages-and-frameworks-8a5f19eb70c9",
  },
]

export default () => (
  <div id="blog" className="blog-news">
    <p className="blog-news__text">
      I also have a blog,
      <a className="blog-news__link" href="/blog">
        {" "}
        read it here
      </a>
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

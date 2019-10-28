import React from "react"
import Article from "./article"

const articles = [
  {
    title: "How to become an amazing software developer!.",
    creationDate: "Oct 24, 2019",
    link:
      "https://dev.to/patferraggi/how-to-become-an-amazing-software-developer-things-i-wish-i-knew-when-i-started-28c5",
  },
  {
    title: "Stop focusing on Programming Languages and Frameworks!.",
    creationDate: "Sep 9, 2019",
    link:
      "https://medium.com/@patferraggi/stop-focusing-on-programming-languages-and-frameworks-8a5f19eb70c9",
  },
  {
    title:
      "How I found a problem with Angular unit testing and decided to fix it myself.",
    creationDate: "July 1, 2019",
    link:
      "https://medium.com/@patferraggi/how-i-found-a-problem-with-angular-unit-testing-and-decided-to-fix-it-myself-7c00b58d57a7",
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
            isActive={articleIndex === 0}
            creationDate={article.creationDate}
            addDivider={isLastElement}
          />
        )
      })}
    </section>
  </div>
)

import React from "react"
import Article from "./article"
import styled from "styled-components"
import device from "../../shared/device"
import globalStyles from "../../shared/global-styles"

const BlogNewsWrapper = styled.div`
  grid-area: blog-news;
  font-size: 64px;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;
  padding-top: 1.5rem;

  @media ${device.phone} {
    font-size: 32px;
    line-height: 32px;
  }
`

const BlogNewsText = styled.p`
  width: 90%;

  @media ${device.phone} {
    width: 100%;
  }
`

const BlogNewsLink = styled.a`
  color: ${globalStyles.secondaryColor};
`

const BlogNewsArticles = styled.section`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;

  @media ${device.phone} {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`

export default () => (
  <BlogNewsWrapper id="blog">
    <BlogNewsText>
      I also have a blog,
      <BlogNewsLink href="/blog"> read it here</BlogNewsLink>
    </BlogNewsText>
    <BlogNewsArticles>
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
    </BlogNewsArticles>
  </BlogNewsWrapper>
)

const articles = [
  {
    title: "How to become an amazing software developer!.",
    creationDate: "Oct 24, 2019",
    link:
      "https://dev.to/patferraggi/how-to-become-an-amazing-software-developer-things-i-wish-i-knew-when-i-started-28c5",
  },
  {
    title: "5 books every developer should read, and some extras.",
    creationDate: "Nov 2, 2019",
    link:
      "https://dev.to/patferraggi/5-books-every-developer-should-read-and-some-extras-377n",
  },
  {
    title:
      "How I found a problem with Angular unit testing and decided to fix it myself.",
    creationDate: "July 1, 2019",
    link:
      "https://medium.com/@patferraggi/how-i-found-a-problem-with-angular-unit-testing-and-decided-to-fix-it-myself-7c00b58d57a7",
  },
]

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"

const BlogListArticlesListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.small} {
    flex-direction: column;
  }
`

const BlogListArticle = styled.article`
  width: 25%;
  min-height: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  @media ${device.small} {
    width: 100%;
    margin-top: 2rem;
  }

  @media ${device.medium} {
    width: 50%;
    margin-top: 2rem;
  }

  @media ${device.large} {
    width: 33%;
    margin-top: 2rem;
  }
`

const BlogListArticleTitle = styled.h3`
  margin-top: 1.5rem;
  width: 70%;
  min-height: 100px;

  @media ${device.small} {
    width: 100%;
    min-height: 80px;
  }
`

const BlogListArticleDate = styled.small`
  margin-top: auto;
  min-height: 45px;
  opacity: 0.5;
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};
`

const StyledImg = styled(Img)`
  height: 210px;
  width: 90%;

  @media ${device.small} {
    height: 100%;
    width: 100%;
  }

  @media ${device.medium} {
    height: 100%;
    width: 90%;
  }

  @media ${device.large} {
    height: 100%;
    width: 90%;
  }
`

export default props => {
  const posts = props.posts
  return (
    <BlogListArticlesListWrapper>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <BlogListArticle key={node.fields.slug}>
            <StyledImg
              imgStyle={{ objectFit: "fill" }}
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <BlogListArticleTitle>
              <StyledGatsbyLink to={`blog${node.fields.slug}`}>
                {title}
              </StyledGatsbyLink>
            </BlogListArticleTitle>
            <BlogListArticleDate>{node.frontmatter.date}</BlogListArticleDate>
          </BlogListArticle>
        )
      })}
    </BlogListArticlesListWrapper>
  )
}

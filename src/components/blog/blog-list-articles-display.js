import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"

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
  font-family: ${globalStyles.fontFamilyMedium};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1px;

  @media ${device.small} {
    width: 100%;
    min-height: 80px;
  }
`

const BlogListArticleDate = styled.small`
  margin-top: auto;
  min-height: 45px;
  opacity: 0.5;
  font-family: ${globalStyles.fontFamilyMedium};
  font-size: 14px;
  line-height: 32px;
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${globalStyles.primaryColor};

  :hover {
    color: ${globalStyles.secondaryColor};
  }
`

const StyledDescription = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  margin-top: 1rem;
  font-family: ${globalStyles.fontFamilyMedium};

  @media ${device.small} {
    line-height: 20px;
  }

  @media ${device.medium} {
    line-height: 20px;
  }

  @media ${device.large} {
    line-height: 20px;
  }
`

const StyledImg = styled(Img)`
  height: 210px;
  width: 90%;

  @media ${device.small} {
    height: 100%;
    width: 100%;
    max-height: 130px;
  }

  @media ${device.medium} {
    height: 100%;
    width: 90%;
    max-height: 130px;
  }

  @media ${device.large} {
    height: 100%;
    width: 90%;
    max-height: 119px;
  }
`

export default props => {
  const BlogListArticlesListWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${props.sidePadding ? "0 2rem 0 2rem" : 0};

    @media ${device.small} {
      flex-direction: column;
    }
  `

  const posts = props.posts
  return (
    <BlogListArticlesListWrapper>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <BlogListArticle key={node.fields.slug}>
            <StyledGatsbyLink to={`blog${node.fields.slug}`}>
              <StyledImg
                imgStyle={{ objectFit: "cover" }}
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </StyledGatsbyLink>

            <BlogListArticleTitle>
              <StyledGatsbyLink to={`blog${node.fields.slug}`}>
                {title}
              </StyledGatsbyLink>
            </BlogListArticleTitle>
            <StyledDescription>
              {node.frontmatter.description}
            </StyledDescription>
            <BlogListArticleDate>
              {node.frontmatter.date} - {node.timeToRead + 1} minutos de lectura
            </BlogListArticleDate>
          </BlogListArticle>
        )
      })}
    </BlogListArticlesListWrapper>
  )
}

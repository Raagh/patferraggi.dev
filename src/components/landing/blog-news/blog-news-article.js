import React from "react"
import styled from "styled-components"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"
import Img from "gatsby-image"

const ArticleLink = styled.a`
  color: ${globalStyles.primaryColor};

  :hover {
    color: ${globalStyles.secondaryColor};
  }

  @media ${device.small} {
    margin-bottom: 1rem;
  }
`

const EnArticleLink = styled(ArticleLink)`
  opacity: 0.5;
  margin-top: 1rem;
`

const ArticleTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1.28px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.small} {
    font-size: 1.5em;
    line-height: 30px;
    letter-spacing: -1.13806px;
  }
`

const StyledPreview = styled(Img)`
  height: 412px;
  margin: 0 2.5rem 0 0;
  width: 100%;

  @media ${device.small} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }

  @media ${device.medium} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }

  @media ${device.large} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }
`

const StyledDescription = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  margin-bottom: 1rem;

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

const EnStyledDescription = styled(StyledDescription)`
  opacity: 0.5;
`

const ArticleTextContainer = styled.div`
  margin-top: 1.5rem;
  margin-right: 4rem;

  @media ${device.small} {
    margin-right: 0;
  }
`

const RenderPreviewIfItMatters = ({ preview, shouldRenderPreview }) => {
  return shouldRenderPreview ? (
    <StyledPreview alt="article-preview" fluid={preview}></StyledPreview>
  ) : null
}

export default props => {
  const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: row;
    width: ${props.small ? "50%" : "100%"};

    @media ${device.small} {
      flex-direction: column;
      width: 100%;
    }

    @media ${device.medium} {
      flex-direction: column;
      width: 100%;
    }

    @media ${device.large} {
      flex-direction: column;
      width: 100%;
    }

    @media ${device.xlarge} {
      width: ${props.small ? "50%" : "100%"};
    }
  `

  return (
    <ArticleWrapper>
      <RenderPreviewIfItMatters
        shouldRenderPreview={props.showPreview}
        preview={props.thumbnail.childImageSharp.fluid}
      ></RenderPreviewIfItMatters>
      <ArticleTextContainer>
        <p>{props.creationDate}</p>
        <ArticleTitle>
          <ArticleLink href={props.link}>{props.title}</ArticleLink>
          <StyledDescription>{props.description}</StyledDescription>
          <EnArticleLink
            target="_blank"
            rel="noopener noreferrer"
            href={props.enPostUrl}
          >
            {props.enTitle}
          </EnArticleLink>
          <EnStyledDescription>{props.enDescription}</EnStyledDescription>
        </ArticleTitle>
      </ArticleTextContainer>
    </ArticleWrapper>
  )
}

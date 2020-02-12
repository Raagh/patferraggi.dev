import React from "react"
import styled from "styled-components"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"
import IcomoonReact from "icomoon-react"
import iconSet from "../../../../content/assets/icons/selection.json"

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row;

  @media ${device.small} {
    flex-direction: column;
  }

  @media ${device.medium} {
    flex-direction: column;
  }

  @media ${device.large} {
    flex-direction: column;
  }
`

const ArticleLink = styled.a`
  color: ${globalStyles.primaryColor};

  :hover {
    color: ${globalStyles.secondaryColor};
  }
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

const StyledPreview = styled.img`
  height: 412px;
  margin: 0 2.5rem 0 0;

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

const ArticleTextContainer = styled.div`
  margin-top: 1.5rem;
  margin-right: 4rem;

  @media ${device.small} {
    margin-right: 0;
  }
`

const RenderPreviewIfItMatters = props => {
  if (props.shouldRenderPreview)
    return (
      <StyledPreview
        alt="close-button"
        id="close-button"
        src={props.preview}
      ></StyledPreview>
    )
  else return null
}

export default props => {
  return (
    <ArticleWrapper>
      <RenderPreviewIfItMatters
        shouldRenderPreview={props.showPreview}
        preview={props.preview}
      ></RenderPreviewIfItMatters>
      <ArticleTextContainer>
        <p>{props.creationDate}</p>
        <ArticleTitle>
          <ArticleLink href={props.link}>{props.title}</ArticleLink>
          <p style={{ marginTop: "auto" }}>
            <ArticleLink
              href={props.link}
              style={{ color: globalStyles.secondaryColor }}
            >
              Leer mas{" "}
              {
                <IcomoonReact
                  iconSet={iconSet}
                  size={"1em"}
                  icon="hand"
                  color={globalStyles.secondaryColor}
                />
              }
            </ArticleLink>
          </p>
        </ArticleTitle>
      </ArticleTextContainer>
    </ArticleWrapper>
  )
}

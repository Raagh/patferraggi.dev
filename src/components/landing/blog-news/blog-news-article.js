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
`

const StyledPreview = styled.img`
  height: 412px;
  padding: 0 2.5rem 0 0;

  @media ${device.small} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 0 2rem 0;
  }
`

const ArticleTextContainer = styled.div`
  padding-top: 1.5rem;
  padding-right: 4rem;

  @media ${device.small} {
    padding-right: 0;
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
          <p>
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

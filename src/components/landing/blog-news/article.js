import React from "react"
import styled from "styled-components"
import globalStyles from "../../shared/global-styles"
import device from "../../shared/device"

const getTitleComponent = props => {
  return props.isActive ? (
    <ArticleContainerTitleActive
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </ArticleContainerTitleActive>
  ) : (
    <ArticleContainerTitle
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </ArticleContainerTitle>
  )
}

const ArticleDisplayWrapper = styled.section`
  display: flex;
  flex-direction: row;
  height: 22.6875rem;

  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 0;

  @media ${device.phone} {
    padding: 1rem 0 0 0;
  }
`
const ArticleContainerTitle = styled.a`
  font-size: 40px;
  line-height: 40px;
  text-decoration: none;
  color: ${globalStyles.primaryColor};

  @media ${device.phone} {
    padding-bottom: 2rem;
    font-size: 26px;
    line-height: 26px;
  }

  @media ${device.tabletPortrait} {
    font-size: 26px;
    line-height: 26px;
  }
`

const ArticleContainerTitleActive = styled(ArticleContainerTitle)`
  color: ${globalStyles.secondaryColor};
`

const ArticleContainerCreationDate = styled.p`
  font-size: 24px;
  line-height: 24px;
  color: ${globalStyles.inactiveColor};
`

const ArticleContainerDivider = styled.div`
  border-left: 2px solid ${globalStyles.inactiveColor};
  padding-right: 2rem;

  @media ${device.phone} {
    padding-bottom: 1rem;
    border-left: none;
    border-bottom: 2px solid ${globalStyles.inactiveColor};
  }

  @media ${device.tabletPortrait} {
    padding-right: 2rem;
    border-left: 2px solid ${globalStyles.inactiveColor};
  }
`

export default props => (
  <ArticleDisplayWrapper>
    <ArticleContainer>
      {getTitleComponent(props)}
      <ArticleContainerCreationDate>
        {props.creationDate}
      </ArticleContainerCreationDate>
    </ArticleContainer>
    {props.addDivider && <ArticleContainerDivider></ArticleContainerDivider>}
  </ArticleDisplayWrapper>
)

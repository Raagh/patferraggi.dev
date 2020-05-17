import React, { useState } from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import iconSet from "../../../content/assets/icons/selection.json"
import IcomoonReact from "icomoon-react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Title = styled.article`
  font-size: 54px;
  line-height: 64px;
  color: ${globalStyles.primaryColor};

  svg > path {
    fill: ${globalStyles.primaryColor};
  }

  @media ${device.small} {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -2.2528px;
    margin-bottom: 0.5rem;
  }

  @media ${device.medium} {
    font-size: 54px;
    line-height: 36px;
    letter-spacing: -2.2528px;
    margin-bottom: 0.5rem;
  }
`

const Text = styled.article`
  font-size: 28px;
  line-height: 64px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
  color: ${globalStyles.primaryColor};

  @media ${device.small} {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -1px;
  }

  @media ${device.medium} {
    line-height: 32px;
  }
`

const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.small} {
    flex-direction: column;
    justify-content: center;
  }
`

const Button = styled.button`
  background: ${globalStyles.secondaryColor};
  width: 15%;
  height: 60px;
  font-size: 24px;
  line-height: 64px;
  color: ${globalStyles.primaryColor};
  text-align: center;
  border: none;

  @media ${device.small} {
    width: 100%;
  }
`

const Container = styled.section`
  padding: 3rem 4rem 3rem 4rem;
  font-family: ${globalStyles.fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  max-width: 1260px;
  margin-left: 2rem;
  margin-right: 2rem;

  border: 2px solid #eaeae4;
  box-sizing: border-box;

  @media ${device.small} {
    margin-left: 0;
    margin-right: 0;
    padding: 2.5rem 2rem 2.5rem 2rem;
  }

  @media ${device.medium} {
    margin-left: 0;
    margin-right: 0;
  }
`

const NoMarginContainer = styled(Container)`
  margin-left: 0;
  margin-right: 0;
`

const StyledSuperContainer = styled(Container)`
  padding: 0;
  border: none;
  margin-left: 0;
  margin-right: 0;
  max-width: 100vw;

  @media ${device.small} {
    padding: 0;
  }
`

const Input = styled.input`
  min-width: 60%;
  background-color: #353540;
  color: ${globalStyles.primaryColor};
  border: none;
  font-size: 24px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  height: 60px;
  padding: 1rem;
  opacity: 0.4;
  outline: none;

  width: 60%;

  :focus {
    outline-width: 0;
  }

  :required {
    box-shadow: none;
  }

  @media ${device.small} {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  @media ${device.medium} {
    width: 80%;
  }
`

const MaxWidthInput = styled(Input)`
  width: 100% !important;
`

export default props => {
  const [email, setEmail] = useState("")
  const [buttonText, setButtonText] = useState("Enviar")

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email).then(data => {
      setEmail("")
      setButtonText("Enviado!")
    })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
    setButtonText("Enviar")
  }

  return (
    <StyledSuperContainer>
      {props.showCloseButton && (
        <button
          onClick={() => props.closeModal()}
          style={{
            height: "24px",
            float: "right",
            margin: "1rem",
            border: "none",
          }}
          id="exit"
        >
          <svg
            id="close-button"
            style={{
              backgroundColor: globalStyles.backgroundColor,
            }}
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                fill: globalStyles.primaryColor,
              }}
              d="M24 2.41611L14.4161 12L24 21.5839L21.5839 24L12 14.4161L2.41611 24L0 21.5839L9.58389 12L0 2.41611L2.41611 0L12 9.58389L21.5839 0L24 2.41611Z"
              fill="#20202C"
            />
          </svg>
        </button>
      )}
      {props.enableMargin && (
        <Container onSubmit={handleSubmit}>
          <Title>
            Suscribite al newsletter{"  "}
            {<IcomoonReact iconSet={iconSet} size={"1em"} icon="email" />}
          </Title>
          <Text>Nada de spam, solo los últimos artículos una vez al mes.</Text>
          <InputContainer>
            <Input
              type="email"
              placeholder="Tu e-mail acá"
              name="email"
              value={email}
              onChange={handleEmailChange}
            ></Input>
            <Button>{buttonText}</Button>
          </InputContainer>
        </Container>
      )}
      {!props.enableMargin && (
        <NoMarginContainer onSubmit={handleSubmit}>
          <Title>
            Suscribite al newsletter{"  "}
            {<IcomoonReact iconSet={iconSet} size={"1em"} icon="email" />}
          </Title>
          <Text>Nada de spam, solo los últimos artículos una vez al mes.</Text>
          <InputContainer>
            <MaxWidthInput
              type="email"
              placeholder="Tu e-mail acá"
              name="email"
              value={email}
              onChange={handleEmailChange}
            ></MaxWidthInput>
            <Button>{buttonText}</Button>
          </InputContainer>
        </NoMarginContainer>
      )}
    </StyledSuperContainer>
  )
}

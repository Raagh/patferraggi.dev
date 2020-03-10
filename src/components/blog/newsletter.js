import React from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
import device from "../../config/device"
import iconSet from "../../../content/assets/icons/selection.json"
import IcomoonReact from "icomoon-react"

const Container = styled.section`
  padding: 3rem 4rem 3rem 4rem;
  font-family: ${globalStyles.fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  max-width: 1260px;
  margin-left: 2rem;

  border: 2px solid #eaeae4;
  box-sizing: border-box;

  @media ${device.small} {
    margin-left: 0;
    padding: 2.5rem 2rem 2.5rem 2rem;
  }
`

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
`

const Text = styled.article`
  font-size: 28px;
  line-height: 64px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;

  @media ${device.small} {
    font-size: 18px;
    line-height: 24px;

    letter-spacing: -1px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.small} {
    flex-direction: column;
    justify-content: center;
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

  :focus {
    outline-width: 0;
  }

  @media ${device.small} {
    width: 100%;
    margin-bottom: 0.5rem;
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

export default () => {
  return (
    <Container>
      <Title>
        Subsríbite al newsletter{" "}
        {<IcomoonReact iconSet={iconSet} size={"1em"} icon="email" />}
      </Title>
      <Text>Nada de spam, solo los últimos artículos cada dos semanas.</Text>
      <InputContainer>
        <Input type="email" placeholder="Tu e-mail acá"></Input>
        <Button>Enviar</Button>
      </InputContainer>
    </Container>
  )
}

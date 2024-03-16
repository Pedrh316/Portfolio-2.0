import styled from "styled-components"
import DefaultText from "./fonts/DefaultText"

const SPresent = styled.section`
    position:fixed;
    padding:2rem;
    border-radius:2rem;
    background-color:${({theme}) => theme.majorContrast};

    p{
        text-indent:0;
    }
`

const Present = () => {
  return (
    <SPresent>
        <DefaultText>Infelizmente ainda não há um recurso adicionado...</DefaultText>
    </SPresent>
  )
}

export default Present
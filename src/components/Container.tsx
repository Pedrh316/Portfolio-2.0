import { Children } from '../types/Children'
import styled from 'styled-components'

const SContainer = styled.div`
    position:static;
    max-width:50rem;
    margin:auto;
    padding-inline:1rem;
    box-sizing:content-box;
`

const Container = ({children}:Children) => {
  return (
    <SContainer>
        {children}
    </SContainer>
  )
}

export default Container
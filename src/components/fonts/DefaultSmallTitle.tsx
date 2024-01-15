import { Children } from '../../types/Children'
import styled from 'styled-components'

const SDefaultSmallTitle = styled.h3`
    font-size:1.25rem;
    font-weight:200;
    color:${({theme}) => theme.color};
`

const DefaultSmallTitle = ({children}:Children) => {
  return (
    <SDefaultSmallTitle>{children}</SDefaultSmallTitle>
  )
}

export default DefaultSmallTitle
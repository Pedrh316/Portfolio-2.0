import { Children } from '../../types/Children'
import styled from 'styled-components'

const SDefaultTitle = styled.h1`
    color:${({theme}) => theme.color};
    font-size:2.25rem;
    font-weight:200;
    letter-spacing:0.3125rem;
`

const DefaultTitle = ({children}:Children) => {
  return (
    <SDefaultTitle>{children}</SDefaultTitle>
  )
}

export default DefaultTitle
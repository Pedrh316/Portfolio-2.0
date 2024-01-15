import { Children } from '../../types/Children'
import styled from 'styled-components'

const SDefaultText = styled.p`
    color:${(props) => props.theme.color};
    font-weight:200;
    font-size:1rem;
    letter-spacing:1px;
    line-height:1.75;
`

const DefaultText = ({children}:Children) => {
  return (
    <SDefaultText>{children}</SDefaultText>
  )
}

export default DefaultText
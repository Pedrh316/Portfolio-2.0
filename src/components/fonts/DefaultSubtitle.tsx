import { Children } from '../../types/Children'
import styled from 'styled-components'

const SDefaultSubtitle = styled.h2`
    font-weight:200;
    font-size:1.5rem;
    padding:0.625rem;
    text-align:center;
    color:${({theme}) => theme.color };
    border-bottom:${({theme}) => theme.darkMode ? 'none' : '2px solid var(--lightblue)'}};    
`

const DefaultSubtitle = ({children}:Children) => {
  return (
    <SDefaultSubtitle>
        {children}
    </SDefaultSubtitle>
  )
}

export default DefaultSubtitle
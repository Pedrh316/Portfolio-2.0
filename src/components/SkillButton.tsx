import { Children } from '../types/Children'
import styled from 'styled-components'

const SSkillButton = styled.p`
    text-indent:0;
    padding:0.625rem;
    border:1px solid var(--verydarkgrey);
    font-size:1.25rem;
    font-weight:200;
    border-radius:0.3125rem;
    background-color:${({theme}) => theme.skillBtn};
    color:${({theme}) => theme.color};
`

const SkillButton = ({children}:Children) => {
  return (
    <SSkillButton>{children}</SSkillButton>
  )
}

export default SkillButton
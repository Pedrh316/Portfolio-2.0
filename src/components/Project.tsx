import { Children } from '../types/Children'
import styled from 'styled-components'

const SProject = styled.article`
        background-color:${({theme}) => theme.majorContrast};
        border-radius:0.625rem;
        padding:1.5rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1rem;
        box-sizing:border-box;
`

const Project = ({children}:Children) => {
  return (
    <SProject className="project">{children}</SProject>
  )
}

export default Project
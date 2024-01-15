import { ReactNode } from 'react'
import styled from 'styled-components'

const SNavButton = styled.a`
    font-weight:200;
    font-size:1.25rem;
    padding-block:0.625rem;
    padding-inline:1rem;
    text-decoration:none;
    position:relative;
    color:${({theme}) => theme.color};

    &:hover span{
        right:0;
    }
`
    
const SLine = styled.span`
    position:absolute;
    background-color:var(--lightblue);
    height:2px;
    bottom:0;
    left:0;
    right:100%;
    transition:right .2s ease-in-out;
`


interface INavButton {
    children:ReactNode,
    to:string
}

const NavButton = ({children, to}:INavButton) => {
  return (
    <SNavButton href={to}>
        {children}
        <SLine></SLine>
    </SNavButton>
  )
}

export default NavButton
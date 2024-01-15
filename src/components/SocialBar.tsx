import { Children } from '../types/Children'
import styled from 'styled-components'
import { useDarkContext } from '../hooks/useDarkContext'

import githubImage from "../assets/icons/github-icon.svg"
import gmailImage from "../assets/icons/gmail-icon.svg"
import linkedinDarkImage from "../assets/icons/linkedin-icon-dark.svg"
import linkedinImage from "../assets/icons/linkedin-icon.svg"

interface ISocialItemProps extends Children {
    to:string,
}

const SSocialBar = styled.section`
    background-color:${({theme}) => theme.majorContrast};
    display:flex;
    flex-direction:column;
    border-radius:1.25rem 0 0 1.25rem;
    overflow:hidden;
    position:fixed;
    top:10rem;
    right:0;
    z-index:50;
    transition:background-color .2s linear;
`

const SSocialItem = styled.a`
    padding:1rem;
    transition:background-color .1s linear;

    &:hover{
        background-color: var(--verydarkgrey);
        filter:${({theme}) => theme.darkMode ? 'grayscale(110%)' : 'unset'};
    }
`

const SocialItem = ({to, children}:ISocialItemProps) => {
    return (
        <SSocialItem href={to} target="_blank">{children}</SSocialItem>
    )
}

const SocialBar = () => {
    const {darkMode} = useDarkContext();
  return (
    <SSocialBar id='social-bar'>
        <SocialItem to="https://github.com/Pedrh316"><img src={githubImage}/></SocialItem>
        <SocialItem to="mailto:cpedrh@gmail.com"><img src={gmailImage}/></SocialItem>
        <SocialItem to="https://www.linkedin.com/in/pedro-costa-883356244/"><img src={darkMode ? linkedinDarkImage : linkedinImage}/></SocialItem>
    </SSocialBar>
  )
}

export default SocialBar
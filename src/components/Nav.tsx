import { useState } from 'react'
import NavButton from './NavButton'
import Container from './Container'
import Present from './Present'
import { useDarkContext } from '../hooks/useDarkContext'
import styled from 'styled-components'
import sunImage from "../assets/icons/sun-icon.svg";
import moonImage from "../assets/icons/moon.svg";
import surpriseDarkImage from "../assets/icons/surprise-icon-dark.svg" 
import surpriseImage from "../assets/icons/surprise-icon.svg" 

const SNav = styled.nav`
    margin-bottom:2rem;
    position:sticky;
    top:0;
    z-index:100;
    background-color:${({theme}) => theme.bg};
    transition:background-color .2s linear;
`

const Left = () => {
    const {darkMode, setDarkMode} = useDarkContext();

    const clickHandler = () => setDarkMode!(prevDarkMode => !prevDarkMode);;

    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'1rem',
        }}>
            <img style={{paddingBlock:'.3rem'}} onClick={clickHandler} width='30px' src={darkMode ? sunImage : moonImage}/>
            <NavButton to="/">Portfolio</NavButton>
        </div>
    )
}

const Right = () => {

    let [showPresent, setShowPresent] = useState(false);
    const {darkMode} = useDarkContext();

    return (
        <>
            { showPresent ? <div className='overlay' onClick={() => setShowPresent(false)}><Present/></div> : '' }
            <div style={{
                display:'flex',
                alignItems:'center',
                flexWrap:'wrap',
                justifyContent:'center'
            }}>
                <NavButton to="/">Início</NavButton>
                <NavButton to="#projects">Projetos</NavButton>
                <NavButton to="#about">História</NavButton>
                <button onClick={() => setShowPresent(true)} className='button'>
                    <img src={darkMode ? surpriseDarkImage : surpriseImage}/> 
                </button>
            </div>
        </>
    )
}

const Nav = () => {
  return (
    <SNav>
        <Container>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                flexWrap:'wrap'
            }}>
                <Left/>
                <Right/>
            </div>
        </Container>
    </SNav>
  )
}

export default Nav
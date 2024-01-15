import { SetStateAction, createContext, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import SocialBar from './components/SocialBar'
import './index.css'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'

type DarkContextProps = {
    setDarkMode:React.Dispatch<SetStateAction<boolean>>
    darkMode:boolean
} | null;

interface ITheme {
    color:string,
    bg:string,
    skillBtn:string,
    lessContrast:string,
    majorContrast:string,
    darkMode:boolean
}

export const DarkContext = createContext<DarkContextProps>(null);

const SRoot = styled.div`
    background-color:${({theme}) => theme.bg};
    min-height:100%;
    transition:background-color .2s linear;
`

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const light:ITheme = {
        color:'var(--verydarkgrey)',
        bg:'#fff',
        skillBtn:'fff',
        lessContrast:'var(--verylightgrey)',
        majorContrast:'var(--verylightgrey)',
        darkMode,
    }

    const dark:ITheme = {
        color:'var(--verylightgrey)',
        bg:'var(--darkgrey)',
        skillBtn:'var(--verydarkgrey)',
        lessContrast:'#828282',
        majorContrast:'var(--verydarkgrey)',
        darkMode
    }


    return (
        <ThemeProvider theme={darkMode ? dark : light}>
            <DarkContext.Provider value={{setDarkMode, darkMode}}>
                <SRoot>
                    <SocialBar/>
                    <Nav/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </SRoot>
            </DarkContext.Provider>
        </ThemeProvider>
    )
}

export default App
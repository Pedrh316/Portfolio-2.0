import { ReactNode } from 'react'

interface IButton {
    children:ReactNode,
    onClick:() => void,
}

const Bigger = ({children, onClick}:IButton) => {
    return (
        <button onClick={onClick} className="bigger-button" style={{             
            fontSize:'1.25rem',
        }}>{children}</button>
    )
}

const Normal = ({children, onClick}:IButton) => {
    return (
        <button onClick={onClick} className="normal-button" style={{            
            fontSize:'1rem',
        }}>{children}</button>
    )
}

const Button = {
    Bigger,
    Normal
}

export default Button
import { Children } from '../../types/Children'

interface ILinkTextProps extends Children {
    to:string
}

const LinkText = ({to, children}:ILinkTextProps) => {
  return (
    <a style={{
        color:'var(--lightblue)',
        fontWeight:'300',
        letterSpacing:'0.1875rem',
        textDecoration:'none',
    }} href={to} target='_blank'>{children}</a>
  )
}

export default LinkText
import { Children } from '../types/Children'

const SectionHeader = ({children}:Children) => {
  return (
    <section style={{
        display:'flex',
        justifyContent:'center',
        marginBottom:'2rem',
    }}>{children}</section>
  )
}

export default SectionHeader
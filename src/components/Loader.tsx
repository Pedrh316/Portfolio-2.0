import styled from 'styled-components'


const SLoader = styled.div`
    position:absolute;
    inset:0;
    z-index:100;
    display:grid;
    background-color:${({theme}) => theme.darkMode ? 'var(--darkgreytransparent)' : '#ffffff33'};
    place-items:center;
    transition:background-color .2s linear;
`
const SCircle = styled.div`
    width:5.375rem;
    height:5.375rem;
    border-block:6px solid ${({theme}) => theme.darkMode ? '#fff' : 'green'};
    border-inline:6px solid transparent;
    border-radius:50%;
    animation:loader 1s ease-in-out infinite;
`

const Loader = () => {
  return (
    <SLoader>
        <SCircle></SCircle>
    </SLoader>
  )
}

export default Loader
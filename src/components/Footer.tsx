import styled from 'styled-components';

const SFooter = styled.footer`
    width:100%;
    padding:1rem;
    background-color:${({theme}) => theme.darkMode ? 'var(--verydarkgrey)' : 'var(--darkgrey)'};
    margin-top:4rem;
    box-sizing:border-box;
    text-align:center;
    color:white;
`

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <SFooter>
        <p>Copyright&copy;{currentYear}</p>
    </SFooter>
  )
}

export default Footer
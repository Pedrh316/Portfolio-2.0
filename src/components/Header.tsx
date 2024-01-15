import DefaultTitle from './fonts/DefaultTitle'
import Container from './Container'
import Button from './Button'
import profileImage from "../assets/images/shopping.jpg"

const Header = () => {
    const borderValue = 'none';
  return (
    <header style={{marginBottom:'2rem'}}>
        <Container>
            <div>
                
                <div style={{display:'flex', margin:'auto' ,flexWrap:'wrap', gap:'2rem'}}>
                
                    <div style={{display:'flex', flexGrow:1, justifyContent:'center'}}>
                        <img src={profileImage} style={{
                            width:'250px',
                            height:'250px',
                            objectFit:'cover',
                            objectPosition:'center 40%',
                            borderRadius:'50%'
                        }}/>
                    </div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'space-around',
                        gap:'2rem',
                        flexGrow:1,
                        }}>
                        <DefaultTitle>
                            <div>
                                <span style={{
                                    display:'block',                                
                                    width:'fit-content',
                                    borderBottom:borderValue,
                                    marginBottom:'1rem'
                                }}>Pedro</span> 
                                <span style={{
                                    display:'block',
                                    marginLeft:'4rem',
                                    width:'fit-content',
                                    borderBottom:borderValue,
                                }}>Costa</span>
                            </div>
                        </DefaultTitle>
                        <Button.Bigger onClick={() => window.open('../../assets/Currículo.pdf')}>Currículo</Button.Bigger>
                    </div>

                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header
import Container from './Container'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'
import About from './About'
import Contacts from './Contacts'

const Main = () => {
  return (
    <Container>
        <main style={{display:'flex',flexDirection:'column', gap:'4rem', alignItems:'flex-start'}}>            
            <About/>
            <Projects/>
            <Skills/>
            <Certificates/>
            <Contacts/>
        </main>
    </Container>
  )
}

export default Main
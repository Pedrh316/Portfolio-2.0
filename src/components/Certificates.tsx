import SectionHeader from './SectionHeader'
import DefaultSubtitle from './fonts/DefaultSubtitle'
import Container from './Container'
import certificate1 from '../assets/certificates/JavascriptAndNode.png';
import certificate2 from '../assets/certificates/WebDesign.png';

const Certificates = () => {

    return (
            <Container>
        <section>

            <SectionHeader>
                <DefaultSubtitle>Certificados</DefaultSubtitle>
            </SectionHeader>
            <ul style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill, minmax(250px,1fr))',
                gap:'2rem',
            }}>
                <li>
                    <img style={{        
                        width:'100%'
                    }} src={certificate1}/>
                </li>
                <li>
                    <img style={{        
                        width:'100%'
                    }} src={certificate2}/>
                </li>
            </ul>
        </section>
            </Container>
    )
}

export default Certificates
import SectionHeader from './SectionHeader'
import DefaultSubtitle from './fonts/DefaultSubtitle'
import Container from './Container'
import certificate1 from '../assets/certificates/JavascriptAndNode.png';
import certificate2 from '../assets/certificates/WebDesign.png';
import certificate3 from '../assets/certificates/Certificado-Google-Firebase.jpg';

const Certificate = ({src, alt}:{src:string, alt:string}) => {
    return (
        <img style={{        
            width:'100%',
        }} src={src} alt={alt}/>
    )
}

const certificatesData = [
    {src:certificate1, alt:"Certificado JavaScript do básico ao avançado (c/ Node.js e projetos)"},
    {src:certificate2, alt:"Certificado 2024 Curso Web Frontend Fundamentos HTML CSS JS +10 Projetos"},
    {src:certificate3, alt:"Certificado JavaScript do básico ao avançado (c/ Node.js e projetos)"},
]

const Certificates = () => {

    return (
        <Container>
            <section>
                <SectionHeader>
                    <DefaultSubtitle>Certificados</DefaultSubtitle>
                </SectionHeader>
                <ul aria-label="Lista de certificados" style={{
                    display:'flex',
                    flexWrap:'wrap',                  
                    justifyContent:'center',
                    gap:'1.5rem',
                }}>
                    {
                        certificatesData.map(({src,alt}) => {
                            return (
                                <li style={{width:'100%', maxWidth:'370px'}}>
                                    <Certificate src={src} alt={alt}/>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        </Container>
    )
}

export default Certificates
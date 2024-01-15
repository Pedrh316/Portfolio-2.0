import DefaultSubtitle from './fonts/DefaultSubtitle'
import { projectsData } from '../data/projectsData'
import Project from './Project'
import DefaultSmallTitle from './fonts/DefaultSmallTitle'
import DefaultText from './fonts/DefaultText'
import Button from './Button'
import SectionHeader from './SectionHeader'
import { useDarkContext } from '../hooks/useDarkContext'
import Conditional from './Conditional'
import Container from './Container'
import githubIcon from "../assets/icons/github-icon-white.svg";
import magnifierImage from "../assets/icons/magnifier.svg"

const Projects = () => {

    const {darkMode} = useDarkContext();

    const renderProjects = () => {
        return projectsData.map((data, i) => {
            const {name, description, link} = data;
            return (
                <li key={i} style={{flexGrow:'1', flexBasis:'250px'}}>
                    <Project>
                        <DefaultSmallTitle>{name}</DefaultSmallTitle>
                        <DefaultText>{description}</DefaultText>
                        <Button.Normal onClick={() => window.open(link)}>Navegar<img src={githubIcon}/></Button.Normal>
                    </Project>
                </li>
            )}
        )
    }

    return (
        <Container>
        <section id="projects">
                <Conditional condition={!darkMode}>
                    <img src={magnifierImage} style={{
                        pointerEvents:'none',
                        position:'absolute',
                        top:'-1rem',
                        left:'-5rem',
                        width:'500px',
                        zIndex:0,
                    }}/>
                </Conditional>
                <div style={{position:'relative'}}>
                    <SectionHeader>
                        <DefaultSubtitle>Projetos</DefaultSubtitle>
                    </SectionHeader>
                    <ul style={{
                        display:'flex',
                        flexWrap:'wrap',
                        gap:'2rem',
                        alignItems:'stretch',
                    }}>
                        {renderProjects()}
                    </ul>

                </div>
            
        </section>
            </Container>
    )
}

export default Projects
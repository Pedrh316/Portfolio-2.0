import SectionHeader from './SectionHeader'
import { skillsData } from '../data/skillsData'
import SkillButton from './SkillButton'
import DefaultSubtitle from './fonts/DefaultSubtitle'

const Skills = () => {

    const renderSkills = () => {
        return skillsData.map((skill, i) => <li key={i}><SkillButton>{skill}</SkillButton></li>)
    }

    return (
        <section id="skills">
            <SectionHeader>
                <DefaultSubtitle>Aprendizado e Tecnologias</DefaultSubtitle>
            </SectionHeader>
            <ul style={{
                display:'flex',
                flexWrap:'wrap',
                gap:'2rem',
                width:'85%',
                margin:'auto',
                justifyContent:'center'
            }}>
                {renderSkills()}
            </ul>
        </section>
    )
}

export default Skills
import DefaultText from './fonts/DefaultText'
import LinkText from './fonts/LinkText'
import { useDarkContext } from '../hooks/useDarkContext'
import Conditional from './Conditional'
import calendarImage from "../assets/icons/calendar.svg"
import utfprImage from "../assets/images/utfpr-2023.jpg";

const About = () => {

    const {darkMode} = useDarkContext();
    const today = new Date();
    const birthday = new Date(2005, 4, 6);

    const year = new Date();
    year.setTime(today.getTime() - birthday.getTime());    

    const age = Math.floor(year.getTime() / 1000 / 60 / 60 / 24 / 365);

  return (
    <section id="about">
        {
            <Conditional condition={!darkMode}>
                <img src={calendarImage} style={{
                    pointerEvents:'none',
                    position:'absolute',
                    top:'3rem',
                    left:'-5rem',
                    width:'500px'
                }}/>
            </Conditional>
        }
        <DefaultText>
            Me chamo Pedro, tenho {age} anos, atualmente graduando em engenharia de computação na <LinkText to="https://www.linkedin.com/company/utfpr/">Universidade Tecnológica Federal do Paraná</LinkText> - Campus Cornélio Procópio (UTFPR-CP), ingressando no 3° período, e gostaria de contar um pouco sobre minha trajetória de estudos e objetivos. 
        </DefaultText>
        <DefaultText>
            Como todo iniciante na área da programação web, comecei aprendendo HTML, CSS e Javascript em fevereiro de 2022 por meio da recomendação de um parente, e após estar seguro de que dominei as tecnologias, Aprendi NodeJs e Express. Já no ano seguinte, adquiri conhecimentos em C, React, React Native, Typescript, Figma, e pensando em trabalhos em equipe, estudei Git e <LinkText to="https://github.com/Pedrh316">Github</LinkText>.
        </DefaultText>
        <img src={utfprImage} style={{
            width:'250px',
            borderRadius:'1.25rem',
            margin:'1rem',
            float:'right'
        }}/>
        <DefaultText>
            Devido ao fato da tecnologia estar muito valorizada e concorrida no momento, preferi me diferenciar por meio de boas práticas de programação e domínio de tecnologias não tão usuais embora ainda sejam muito famosas, como por exemplo o Clean Arquitechture, Clean code, Firebase, Design patterns, entre outros.
        </DefaultText>
        <DefaultText>
            Hoje possuo muito interesse em programação web e mobile, faço projetos, e busco por uma vaga de emprego na web ou mobile, seja individual ou para trabalho em equipe.
        </DefaultText>
        <DefaultText>
            Além da programação, e também para não exceder em estresse por excesso de uso de telas, gosto também de tocar músicas, cantar, praticar esportes, ler, treinar na academia, entre outros, buscando sempre o melhoramento intelectual e físico, de forma a levar a vida de maneira plena e saudável.
        </DefaultText>
    
    </section>
  )
}

export default About
import { ChangeEvent, FormEventHandler, ReactNode, useState } from 'react'
import DefaultText from './fonts/DefaultText'
import SectionHeader from './SectionHeader'
import DefaultSubtitle from './fonts/DefaultSubtitle'
import Button from './Button'
import emailJs from '@emailjs/browser';
import ToastNotification from './ToastNotification'
import Loader from './Loader'
import styled from 'styled-components'
import linkedinImage from '../assets/icons/linkedin-icon.svg'
import gmailImage from '../assets/icons/gmail-icon.svg'
import instagramImage from '../assets/icons/instagram-icon.svg'
import discordImage from '../assets/icons/discord-icon.svg'



const SLabel = styled.label`
    color:${({theme}) => theme.color};
`

const Contact = ({src, children}:{src:string, children:ReactNode}) => {
    return (
        <article style={{marginBottom:'2rem', display:'flex', gap:'2rem', alignItems:'center', fontStyle:'normal'}}>
            <img src={src}/>
            <DefaultText>{children}</DefaultText>
        </article>
    )
}


const Contacts = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from_name:'',
        subject:'',
        email:'',
        message:'',
    });

    type TemplateParams = typeof formData

    const submitHandler:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setLoading(true);
        emailJs.send('service_nrr88xh', 'template_pafrbkq', formData, '-L1nEvvsL1CcPZQsd')
        .then(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData(pd => {
                Object.keys(pd).forEach(prop => pd[prop as keyof TemplateParams] = '')
                return {...pd}
            })
        })
        .catch(e => console.log('ocorreu um erro ao enviar email', e))
    }
console.log(formData)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, prop:keyof TemplateParams) => setFormData((pd) => {
        pd[prop] = e.target.value;
        return {...pd};
    })

    return (
        <>            
            {
                submitted ? 
                <ToastNotification right={true} bottom={true} duration={4} lineColor='green' bgColor='#afa'>
                    <p style={{color:'var(--darkgrey)'}}>Email enviado com sucesso</p>
                </ToastNotification> 
                : 
                <></>
            }
            
            <section id="contact" >
                <SectionHeader>
                    <DefaultSubtitle>Contato</DefaultSubtitle>
                </SectionHeader>            
                <div className='content'>
                    <address style={{flexBasis:'300px', flexGrow:1}}>
                        <Contact src={linkedinImage}>
                            https://www.linkedin.com/in/pedro-costa-883356244/
                        </Contact>
                        <Contact src={gmailImage}>
                            cpedrh@gmail.com
                        </Contact>
                        <Contact src={instagramImage}>
                            https://www.instagram.com/pedrouthcs/
                        </Contact>
                        <Contact src={discordImage}>
                            pedrojeaguer321
                        </Contact>
                    </address>
                    <form onSubmit={submitHandler} id="contact-form" style={{flexBasis:'300px', flexGrow:1}}>
                        {
                            loading ?
                            <Loader/> 
                            :
                            <></>
                        }
                        <div className='wrapper'>
                            <SLabel style={{flexGrow:1}}>
                                Nome
                                <input type="text" required onChange={(e) => onChangeHandler(e, 'from_name')} value={formData.from_name}/>
                            </SLabel>
                            <SLabel style={{flexGrow:1}}>
                                Email
                                <input type="email" required onChange={(e) => onChangeHandler(e, 'email')} value={formData.email}/>
                            </SLabel>
                        </div>
                        <SLabel>
                            Assunto
                            <input type="text" required onChange={(e) => onChangeHandler(e, 'subject')} value={formData.subject}/>
                        </SLabel>
                        <textarea placeholder='Me envie uma mensagem' onChange={(e) => onChangeHandler(e, 'message')} value={formData.message} required></textarea>
                        <Button.Normal onClick={() => {}}>Enviar</Button.Normal>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacts
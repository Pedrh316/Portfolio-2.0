import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Children } from '../types/Children'

interface IToastNotification extends Children{
    duration?:number
    lineColor?:string
    bgColor?:string
    top?:boolean
    right?:boolean
    bottom?:boolean
    left?:boolean
    dependencyRenderStateSetter:React.Dispatch<React.SetStateAction<boolean>>
}

type SLineProps = Pick<IToastNotification, 'duration' | 'lineColor'>
type SToastNotificationProps = Pick<IToastNotification, 'duration' | 'bgColor'> & {inset:string[]}

const SLine = styled.div<SLineProps>`
    height:2px;
    position:absolute;
    inset:auto 0 0 0;
    background-color:${({lineColor}) => `${lineColor}` || 'var(--lightblue)'};
    animation:lineLoading ${({duration}) => duration ? duration - .75 : 5}s cubic-bezier(.45,0,.45,1);
    animation-fill-mode: forwards;
`

const SToastNotification = styled.article<SToastNotificationProps>`
    display:flex;
    gap:1.5rem;
    padding:1rem;
    border-radius: .5rem;
    overflow:hidden;
    background-color:${({bgColor}) => bgColor ?? 'var(--lightgrey)'};
    position:fixed;
    z-index:100;
    inset:${({inset}) => inset.join(' ')};
    animation:toastLoading ${({duration}) => duration ? duration - .5 : 5}s linear;
    animation-fill-mode: forwards;
`


const ToastNotification = ({bgColor, lineColor, duration, children, top, right, bottom, left, dependencyRenderStateSetter}:IToastNotification) => {

    const [show, setShow] = useState(true);
    const position = {top,right,bottom,left};
        
    type Position = typeof position;
    const insetStyle = Object.keys(position).map((key) => {
        return position[key as keyof Position] ? '2rem' : 'auto';
    })

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            dependencyRenderStateSetter(false);
        }, (duration ? duration * 1000 : 5000))
    }, [])

    return (
        show ? (
            <SToastNotification inset={insetStyle} bgColor={bgColor} duration={duration}>
                {children}
                <SLine duration={duration} lineColor={lineColor}></SLine>
            </SToastNotification>
        )
        :
        <></>
    )
}

export default ToastNotification
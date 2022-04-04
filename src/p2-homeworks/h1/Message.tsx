import React from 'react'
import style from './Message.module.css'

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div className={style.wrap}>
            <div className={style.avatar}><img src={props.avatar} alt=""/></div>
            <div className={style.corner}></div>
            <div className={style.allText}>
                <div className={style.name}> {props.name}</div>
                <span className={style.message}>{props.message}</span>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

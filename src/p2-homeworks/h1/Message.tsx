import React from 'react'
import classes from './Message.module.css';

type DataProps = {
    avatar: string
    name: string
    message: string
    time: string
}
type MessageProps = {
    messaging: DataProps


}

function Message(props: MessageProps) {

    return (
        <div className={classes.Mes}>
            <div className={classes.allmes}>
                <img className={classes.img} src={props.messaging.avatar}/>
                <div className={classes.doc}>
                    <div className={classes.name}>  {props.messaging.name}</div>
                    <div className={classes.text}> {props.messaging.message}</div>
                    <div className={classes.time}> {props.messaging.time}</div>
                </div>
            </div>
        </div>

    );
}

export default Message

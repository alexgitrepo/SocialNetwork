import React from 'react';
import style from './Message.module.css'
import {NavLink} from "react-router-dom";
const Message = (props) => {
    return (
        <div className={style.messageItem}>
           {props.message}
        </div>


    );
}

export default Message;
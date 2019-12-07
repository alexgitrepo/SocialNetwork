import React from 'react';
import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";
const Dialog = (props) => {
    return (
        <div className={style.dialogItem}>
            <NavLink  to={`/messages/${props.id} `} className={style.link}> {props.name}</NavLink>
        </div>


    );
}

export default Dialog;
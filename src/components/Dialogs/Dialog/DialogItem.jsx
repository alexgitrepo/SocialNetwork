import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return (
        <div className={style.dialogItem}>
            <NavLink activeClassName={style.active}  to={`/messages/${props.id} `} className={style.link}> {props.name}</NavLink>
        </div>


    );
}

export default DialogItem;
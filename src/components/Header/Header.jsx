import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>

            <img src="https://i.pinimg.com/736x/81/77/e3/8177e3c0b884d55744270ff1ba02e3d6--funny-shit-adult-humor.jpg" alt=""/>
            {props.auth.isLogin ? <span>{props.auth.login}</span>:<NavLink to='/login'> LOGIN </NavLink>}
          </header>

           );
}

export default Header;

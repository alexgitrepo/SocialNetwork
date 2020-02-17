import React from 'react';
import style from './MainNav.module.css'
import {NavLink} from "react-router-dom";

const MainNav = () => {
    return (

        <nav className={style.mainNav}>
            <div><NavLink activeClassName={style.active} to="/profile" >Profile</NavLink></div>
            <div><NavLink activeClassName={style.active} to="/messages">Messages</NavLink></div>
            <div><NavLink activeClassName={style.active} to="/news">News</NavLink></div>
            <div><NavLink activeClassName={style.active} to="/music">Music</NavLink></div>
            <div><NavLink activeClassName={style.active} to="/settings">Settings</NavLink></div>
            <div><NavLink activeClassName={style.active} to="/users">Users</NavLink></div>

        </nav>
    );
}

export default MainNav;

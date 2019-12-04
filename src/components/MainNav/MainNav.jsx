import React from 'react';
import style from './MainNav.module.css'

const MainNav = () => {
    return (

        <nav className={style.mainNav}>
            <div><a className={style.active} href="#" >Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>

        </nav>
    );
}

export default MainNav;

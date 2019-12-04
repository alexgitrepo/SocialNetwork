import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={style.mainContent}>
            <div>
                <img className={style.mainImage} src="https://www.nastol.com.ua/download.php?img=201905/1600x900/nastol.com.ua-339637.jpg"
                     alt=""/>
            </div>
            <div>
                ava+descriprion
            </div>
            <MyPosts/>
        </main>


    );
}

export default Profile;

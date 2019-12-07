import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo.module";

const Profile = () => {
    return (
        <main className={style.mainContent}>
           <ProfileInfo/>
            <MyPosts/>
        </main>


    );
}

export default Profile;

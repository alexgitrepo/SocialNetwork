import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <main className={style.mainContent}>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer/>
        </main>


    );
}

export default Profile;

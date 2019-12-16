import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <main className={style.mainContent}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </main>


    );
}

export default Profile;

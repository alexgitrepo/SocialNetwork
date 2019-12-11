import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo.module";

const Profile = (props) => {
    return (
        <main className={style.mainContent}>
            <ProfileInfo/>
            <MyPosts myPostsData={props.state.myPostsData}/>
        </main>


    );
}

export default Profile;

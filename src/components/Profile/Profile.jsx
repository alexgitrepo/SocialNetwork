import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <main className={style.mainContent}>
            <ProfileInfo savePhoto={props.savePhoto} changeProfile={props.changeProfile} isOwner={props.isOwner} updateStatus={props.updateStatus} profilePage={props.profilePage}/>
            {props.isOwner&& <MyPostsContainer />}
        </main>


    );
}

export default Profile;

import React from 'react';
import style from './Profile.module.css'
import Preloader from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileCurrentData from "../../ProfileCurrentData";


const ProfileInfo = (props) => {
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    if (!props.profilePage.currentUser) {
        return <Preloader/>
    } else
        return (
            <div>
                <div className={style.descriptionBlock}>
                    <img className={style.ava} src={props.profilePage.currentUser.photos.large}/>
                    <div>{props.isOwner && <input onChange={mainPhotoSelected} type="file"/>}</div>
                    <div className={style.profileStatus}>
                        <ProfileStatusWithHooks isOwner={props.isOwner} updateStatus={props.updateStatus}
                                                status={props.profilePage.status}/>
                    </div>
                    <ProfileCurrentData changeProfile={props.changeProfile}
                                        currentProfile={props.profilePage.currentUser} isOwner={props.isOwner}/>
                </div>
            </div>


        );
}

export default ProfileInfo;

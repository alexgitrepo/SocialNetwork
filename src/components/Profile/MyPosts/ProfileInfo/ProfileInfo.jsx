import React from 'react';
import style from './Profile.module.css'
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (!props.profilePage.currentUser) {
        return <Preloader/>
    } else
        return (
            <div>
                <div>
                    {/*<img className={style.mainImage}*/}
                    {/*     src="https://www.nastol.com.ua/download.php?img=201905/1600x900/nastol.com.ua-339637.jpg"*/}
                    {/*     alt=""/>*/}
                </div>
                <div className={style.descriptionBlock}>

                    <img className={style.ava} src={props.profilePage.currentUser.photos.large}/>
                   <div className={style.profileStatus}>
                    <ProfileStatusWithHooks isOwner={props.isOwner} updateStatus={props.updateStatus}  status={props.profilePage.status}/>
                   </div>
                </div>
            </div>


);
}

export default ProfileInfo;

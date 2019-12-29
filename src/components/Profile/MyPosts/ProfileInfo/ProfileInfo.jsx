import React from 'react';
import style from './Profile.module.css'
import Preloader from "../../../common/Preloader";


const ProfileInfo = (props) => {debugger
    if (!props.profilePage.currentUser) {return <Preloader/>}
    else
    return (
        <div>
            <div>
                <img className={style.mainImage}
                     src="https://www.nastol.com.ua/download.php?img=201905/1600x900/nastol.com.ua-339637.jpg"
                     alt=""/>
            </div>
            <div className={style.descriptionBlock}>

                <img className={style.ava} src={props.profilePage.currentUser.photos.large}/>

                <h3>ava+descriprion</h3>
            </div>
        </div>


    );
}

export default ProfileInfo;

import React from 'react';
import style from './Profile.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.mainImage}
                     src="https://www.nastol.com.ua/download.php?img=201905/1600x900/nastol.com.ua-339637.jpg"
                     alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <h3>ava+descriprion</h3>
            </div>
        </div>


    );
}

export default ProfileInfo;

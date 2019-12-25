import React from 'react';
import userPhoto from"../../../assets/images/user.png"
import style from './User.module.css'
import {NavLink} from "react-router-dom";
const User = (props) => {

    let follow = () => {
        props.followCallback(props.userId)
    }
    let unfollow = () => {
        props.unfollowCallback(props.userId)
    }

    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                <NavLink to={'/profile/'+props.userId}>

                    <img src={props.img.small===null ? userPhoto: props.img.small } className={style.userPhoto} alt='Тут ава будет'/>
                </NavLink>
            </div>
            <div>
                {props.country}
            </div>
            <div>
                {props.city}
            </div>
            <div>
                {props.isFollowed === true ? <button onClick={unfollow}>UnFollow</button> :
                    <button onClick={follow}>follow</button>}
            </div>
        </div>

    );
}

export default User;

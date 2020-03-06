import React from 'react';
import userPhoto from "../../../assets/images/user.png"
import style from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {

    let follow = () => {
        props.followUser(props.userId)
    }


    let unfollow = () => {
        props.unfollowUser(props.userId)
    }

    return (
        <div className={style.user}>
            <div className={style.user__name}>
                {props.name}
            </div>
            <div>
                <NavLink to={'/profile/' + props.userId}>
                    <img src={props.img.small === null ? userPhoto : props.img.small} className={style.userPhoto}
                         alt='Тут ава будет'/>
                </NavLink>
            </div>
            <div>
                {props.isFollowed === true ?
                    <button disabled={props.isFollowingInProcessUsers.some((item) => item == props.userId)}
                            onClick={unfollow}>UnFollow</button> :
                    <button disabled={props.isFollowingInProcessUsers.some((item) => item == props.userId)}
                            onClick={follow}>follow</button>}
            </div>
        </div>

    );
}

export default User;

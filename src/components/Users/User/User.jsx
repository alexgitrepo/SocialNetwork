import React from 'react';
import userPhoto from "../../../assets/images/user.png"
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {changeIsisFollowingInProcess} from "../../../redux/users-reducer";

const User = (props) => {

    let follow = () => {
        props.changeIsisFollowingInProcess(props.userId)
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + props.userId, {}, {
            withCredentials: true,
            headers: {'API-KEY': '2e11e55a-6317-486e-b332-4118c5f8bf85'}
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.followCallback(props.userId)
                props.changeIsisFollowingInProcess(props.userId)
            }
        })
    }


    let unfollow = () => {
        props.changeIsisFollowingInProcess(props.userId)
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + props.userId, {
            withCredentials: true,
            headers: {'API-KEY': '2e11e55a-6317-486e-b332-4118c5f8bf85'}
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.unfollowCallback(props.userId)
                props.changeIsisFollowingInProcess(props.userId)
            }
        })
    }

    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                <NavLink to={'/profile/' + props.userId}>

                    <img src={props.img.small === null ? userPhoto : props.img.small} className={style.userPhoto}
                         alt='Тут ава будет'/>
                </NavLink>
            </div>
            <div>
                {props.country}
            </div>
            <div>
                {props.city}
            </div>
            <div>
                {props.isFollowed === true ? <button disabled={props.isFollowingInProcessUsers.some((item)=>item==props.userId)} onClick={unfollow}>UnFollow</button> :
                    <button disabled={props.isFollowingInProcessUsers.some((item)=>item==props.userId)} onClick={follow}>follow</button>}
            </div>
        </div>

    );
}

export default User;

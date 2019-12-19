import React from 'react';


const User = (props) => {

    let follow = () => {
        props.followCallback(props.userId)
    }
    let unfollow = () => {
        props.unfollofCallback(props.userId)
    }

    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                <img src={props.ava} alt='Тут ава будет'/>
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

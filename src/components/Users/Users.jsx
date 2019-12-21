import React from 'react';
import User from "./User/User";
import * as axios from "axios";


const Users = (props) => {
    if (props.usersPage.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=15').then(
            response=>{props.setUsersCallback(response.data.items)}
        )
    }

    let myUsersDataElements = props.usersPage.users.map(item =>
        <User name={item.name}
              country={"item.location.country"}
              userId={item.id}
              city={"item.location.city"} isFollowed={item.followed} img={item.ava}
              followCallback={props.followCallback} unfollowCallback={props.unfollowCallback}
    />)



    return (

        <div>
            {myUsersDataElements}
        </div>
    );
}

export default Users;

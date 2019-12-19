import React from 'react';
import User from "./User/User";


const Users = (props) => { debugger
    let myUsersDataElements = props.usersPage.users.map(item =>
        <User name={item.fullName}
              country={item.location.country}
              userId={item.id}
              city={item.location.city} isFollowed={item.followed} img={item.ava}
              followCallback={props.followCallback} unfollofCallback={props.unfollofCallback}
    />)

    return (
        <div>
            {myUsersDataElements}
        </div>
    );
}

export default Users;

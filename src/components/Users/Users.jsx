import React from 'react';
import User from "./User/User";
import Paginator from "../common/Paginator";


const Users = (props) => {
    let myUsersDataElements = props.usersPage.users.map(item =>
        <User name={item.name}
              country={"item.location.country"}
              userId={item.id}
              city={"item.location.city"} isFollowed={item.followed} img={item.photos}
              followCallback={props.followCallback} unfollowCallback={props.unfollowCallback}
              isFollowingInProcessUsers={props.isFollowingInProcessUsers}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
        />)
    return (
        <div>
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} pageSize={props.pageSize} onPageChange={props.onPageChange}/>
        </div>
        <div>
                      {myUsersDataElements}
        </div>
        </div>
    );
}
export default Users;

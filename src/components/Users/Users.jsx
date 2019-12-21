import React from 'react';
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=4').then(
            response => {
                this.props.setUsersCallback(response.data.items)
            }
        );
    }


    render() {
        let myUsersDataElements = this.props.usersPage.users.map(item =>
            <User name={item.name}
                  country={"item.location.country"}
                  userId={item.id}
                  city={"item.location.city"} isFollowed={item.followed} img={item.photos}
                  followCallback={this.props.followCallback} unfollowCallback={this.props.unfollowCallback}
            />)


        return (

            <div>
                {myUsersDataElements}
            </div>
        );
    }


}

export default Users;

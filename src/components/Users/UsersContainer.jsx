import React from 'react';
import {connect} from "react-redux";
import {followUserThunkCreator, getUsersThunkCreator, unfollowUserThunkCreator} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

let mapStateToProps = (state) => {
    return {
        usersPage: state.UsersPage,
        totalUsersCount: state.UsersPage.totalUsers,
        currentPage: state.UsersPage.currentPage,
        pageSize: state.UsersPage.pageSize
    }

}


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.onPageChange(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    getNewUsers = (item) => {
        this.props.onPageChange(item, this.props.usersPage.pageSize)
    }


    render() {
        return (
            <div>

                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users getNewUsers={this.getNewUsers} usersPage={this.props.usersPage}
                       isFollowingInProcessUsers={this.props.usersPage.isFollowingInProcessUsers}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       onPageChange={this.props.onPageChange}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                />
            </div>
        )

    }


}


export default connect(mapStateToProps, {

    onPageChange: getUsersThunkCreator,
    followUser: followUserThunkCreator,
    unfollowUser: unfollowUserThunkCreator
})(UsersContainer)

import React from 'react';
import {connect} from "react-redux";
import {
    changeIsFetchingCallback,
    changeIsisFollowingInProcess,
    followUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPageCallback,
    setPagesOnScreenNextCallback,
    setPagesOnScreenPrevCallback,
    setTotalPagesCallback,
    setTotalUsersCallback,
    setUsersCallback,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

let mapStateToProps = (state) => {
    return {usersPage: state.UsersPage}

}


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.usersPerPage)
    }

    getNewUsers = (item) => {
        this.props.getUsers(item, this.props.usersPage.usersPerPage)
    }


    render() {
        return (
            <div>

                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users getNewUsers={this.getNewUsers} usersPage={this.props.usersPage}
                       setPagesOnScreenNextCallback={this.props.setPagesOnScreenNextCallback}
                       setPagesOnScreenPrevCallback={this.props.setPagesOnScreenPrevCallback}
                       isFollowingInProcessUsers={this.props.usersPage.isFollowingInProcessUsers}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}/>
            </div>
        )

    }


}


export default connect(mapStateToProps, {
    setUsersCallback,
    setTotalUsersCallback,
    setCurrentPageCallback,
    setTotalPagesCallback,
    changeIsisFollowingInProcess,
    setPagesOnScreenNextCallback,
    setPagesOnScreenPrevCallback,
    changeIsFetchingCallback,
    getUsers: getUsersThunkCreator,
    followUser: followUserThunkCreator,
    unfollowUser: unfollowUserThunkCreator
})(UsersContainer)

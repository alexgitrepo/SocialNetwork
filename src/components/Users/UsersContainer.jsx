import React from 'react';
import {connect} from "react-redux";
import {
    followUserActionCreator,
    setCurrentPageActionCreator,
    setPagesOnScreenFromActionCreator, setPagesOnScreenNextActionCreator, setPagesOnScreenPrevActionCreator,
    setPagesOnScreenToActionCreator,
    setTotalPagesActionCreator,
    setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowUserActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

let mapStateToProps = (state) => {
    return {usersPage: state.UsersPage}

}
let mapDispatchToProps = (dispatch) => {
    return {
        followCallback: (id) => {
            dispatch(followUserActionCreator(id))
        },
        unfollowCallback: (id) => {
            dispatch(unfollowUserActionCreator(id))
        },
        setUsersCallback: (users) => {
            dispatch(setUsersActionCreator(users))

        },
        setTotalUsersCallback: (count) => {
            dispatch(setTotalUsersActionCreator(count))
        },
        setCurrentPageCallback: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setTotalPagesCallback: () => {
            dispatch(setTotalPagesActionCreator())
        },
        setPagesOnScreenNextCallback: () => {
            dispatch(setPagesOnScreenNextActionCreator())
        },
        setPagesOnScreenPrevCallback: () => {
            dispatch(setPagesOnScreenPrevActionCreator())
        }

    }


}

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            (response) => {
                this.props.setUsersCallback(response.data.items);
                this.props.setTotalUsersCallback(response.data.totalCount);
                this.props.setTotalPagesCallback()
            })
    }

    getNewUsers = (item) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.usersPage.usersPerPage}`).then(
            (response) => {
                this.props.setUsersCallback(response.data.items);
                this.props.setCurrentPageCallback(item)
            })
    }

    render() {
        return (
            <Users getNewUsers={this.getNewUsers} usersPage={this.props.usersPage}
                   setPagesOnScreenNextCallback={this.props.setPagesOnScreenNextCallback}
                   setPagesOnScreenPrevCallback={this.props.setPagesOnScreenPrevCallback}/>
        )

    }


}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

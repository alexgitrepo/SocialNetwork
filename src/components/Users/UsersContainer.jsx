import React from 'react';
import {connect} from "react-redux";
import {
    changeIsFetchingCallback,
    followCallback,
    setCurrentPageCallback,
    setPagesOnScreenNextCallback,
    setPagesOnScreenPrevCallback,
    setTotalPagesCallback,
    setTotalUsersCallback,
    setUsersCallback,
    unfollowCallback
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader";

let mapStateToProps = (state) => {
    return {usersPage: state.UsersPage}

}


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeIsFetchingCallback()
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            (response) => {
                this.props.setUsersCallback(response.data.items);
                this.props.setTotalUsersCallback(response.data.totalCount);
                this.props.setTotalPagesCallback()
                this.props.changeIsFetchingCallback()
            })
    }

    getNewUsers = (item) => {
        this.props.changeIsFetchingCallback()

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.usersPage.usersPerPage}`).then(
            (response) => {
                this.props.setUsersCallback(response.data.items);
                this.props.setCurrentPageCallback(item)
                this.props.changeIsFetchingCallback()

            })
    }


    render() {
        return (
            <div>

                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users getNewUsers={this.getNewUsers} usersPage={this.props.usersPage}
                       setPagesOnScreenNextCallback={this.props.setPagesOnScreenNextCallback}
                       setPagesOnScreenPrevCallback={this.props.setPagesOnScreenPrevCallback}/>
            </div>
        )

    }


}


export default connect(mapStateToProps, {
    followCallback, unfollowCallback, setUsersCallback, setTotalUsersCallback, setCurrentPageCallback,
    setTotalPagesCallback, setPagesOnScreenNextCallback, setPagesOnScreenPrevCallback, changeIsFetchingCallback
})(UsersContainer)

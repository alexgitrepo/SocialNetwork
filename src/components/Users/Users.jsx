import React from 'react';
import User from "./User/User";
import * as axios from "axios";
import {pureFinalPropsSelectorFactory} from "react-redux/lib/connect/selectorFactory";
import style from './Users.module.css'


class Users extends React.Component {

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
        let pages = [];
        if (this.props.usersPage.pagesOnScreenTo < this.props.usersPage.totalPages) {
            for (let i = this.props.usersPage.pagesOnScreenFrom; i <= this.props.usersPage.pagesOnScreenTo; i++) {
                pages.push(i)
            }
        }

        let showPages = pages.map((item) => {

            if (item === this.props.usersPage.currentPage) {
                return <button className={style.active} onClick={(e) => {
                    this.getNewUsers(item)
                }}>{item}</button>
            } else {
                return <button onClick={(e) => {
                    this.getNewUsers(item)
                }}>{item}</button>
            }
        });
        let prevButton = null
        let nextButton = null
        let showNextUsers = () => {
            this.props.setPagesOnScreenNextCallback();
        }
        let showPrevUsers = () => {
            this.props.setPagesOnScreenPrevCallback()

        }
        if (this.props.usersPage.pagesOnScreenTo === 5) {
            prevButton = <button disabled={true}> PREV </button>
        } else {
            prevButton = <button onClick={showPrevUsers}> PREV </button>
        }
        if (this.props.usersPage.pagesOnScreenTo >= this.props.usersPage.totalPages) {
            nextButton = <button disabled={true}> NEXT </button>
        } else {
            nextButton = <button onClick={showNextUsers}> NEXT </button>
        }

        let myUsersDataElements = this.props.usersPage.users.map(item =>
            <User name={item.name}
                  country={"item.location.country"}
                  userId={item.id}
                  city={"item.location.city"} isFollowed={item.followed} img={item.photos}
                  followCallback={this.props.followCallback} unfollowCallback={this.props.unfollowCallback}
            />)


        return (
            <div>
                {prevButton}
                {showPages}
                {nextButton}
                {myUsersDataElements}
            </div>
        );
    }


}

export default Users;

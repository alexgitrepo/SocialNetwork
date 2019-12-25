import React from 'react';
import User from "./User/User";
import * as axios from "axios";
import {pureFinalPropsSelectorFactory} from "react-redux/lib/connect/selectorFactory";
import style from './Users.module.css'


const Users = (props) => {


    let showNextUsers = () => {
        props.setPagesOnScreenNextCallback();
    }
    let showPrevUsers = () => {
       props.setPagesOnScreenPrevCallback()

    }
    let pages = [];
    if (props.usersPage.pagesOnScreenTo - 4 < props.usersPage.totalPages) {
        for (let i = props.usersPage.pagesOnScreenFrom; i <= props.usersPage.pagesOnScreenTo; i++) {
            pages.push(i)
        }
    }

    let showPages = pages.map((item) => {

        if (item === props.usersPage.currentPage) {
            return <button className={style.active} onClick={(e) => {
                props.getNewUsers(item)
            }}>{item}</button>
        } else {
            return <button onClick={(e) => {
                props.getNewUsers(item)
            }}>{item}</button>
        }
    });
    let prevButton = null
    let nextButton = null

    if (props.usersPage.pagesOnScreenTo === 5) {
        prevButton = <button disabled={true}> PREV </button>
    } else {
        prevButton = <button onClick={showPrevUsers}> PREV </button>
    }
    if (props.usersPage.pagesOnScreenTo >= props.usersPage.totalPages) {
        nextButton = <button disabled={true}> NEXT </button>
    } else {
        nextButton = <button onClick={showNextUsers}> NEXT </button>
    }

    let myUsersDataElements = props.usersPage.users.map(item =>
        <User name={item.name}
              country={"item.location.country"}
              userId={item.id}
              city={"item.location.city"} isFollowed={item.followed} img={item.photos}
              followCallback={props.followCallback} unfollowCallback={props.unfollowCallback}
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
export default Users;

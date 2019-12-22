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

let mapStateToProps = (state)=>{
    return {usersPage:state.UsersPage}

    }
let mapDispatchToProps=(dispatch)=>{
    return{
        followCallback:(id)=>{
            dispatch(followUserActionCreator(id))
        },
        unfollowCallback:(id)=>{
            dispatch(unfollowUserActionCreator(id))
                    },
        setUsersCallback:(users)=>{
            dispatch(setUsersActionCreator(users))

    },
        setTotalUsersCallback:(count)=>{
            dispatch(setTotalUsersActionCreator(count))
        },
        setCurrentPageCallback:(page)=>{
            dispatch(setCurrentPageActionCreator(page))
        },
        setTotalPagesCallback:()=>{
            dispatch(setTotalPagesActionCreator())
        },
        setPagesOnScreenNextCallback:()=>{
            dispatch(setPagesOnScreenNextActionCreator())
        },
        setPagesOnScreenPrevCallback:()=>{
            dispatch(setPagesOnScreenPrevActionCreator())
        }

    }


}

const UsersContainer= connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;

import React from 'react';
import {connect} from "react-redux";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state)=>{
    return {usersPage:state.UsersPage}

    }
let mapDispatchToProps=(dispatch)=>{
    return{
        followCallback:(id)=>{
            dispatch(followUserActionCreator(id))
        },
        unfollofCallback:(id)=>{
            dispatch(unfollowUserActionCreator(id))
                    },
        setUsersCallback:(users)=>{
            dispatch(setUsersActionCreator(users))

    }
    }
}

const UsersContainer= connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;

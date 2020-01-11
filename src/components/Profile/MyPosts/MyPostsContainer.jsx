import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {profilePage: state.profilePage}

}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostCallback: (formData) => {
            dispatch(addPostActionCreator(formData))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

import React from 'react';
import style from './MyPosts.module.css'

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const  MyPostsContainer = (props) => {
let state=props.store.getState().profilePage
    let addPostCallback = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChangeCallback = (text) => {
         props.store.dispatch(updateNewPostActionCreator(text))
    }
    return (
        <div>
        <MyPosts addPostCallback={addPostCallback} onPostChangeCallback={onPostChangeCallback} state={state}/>
    </div>
);
}

export default MyPostsContainer;

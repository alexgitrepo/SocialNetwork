import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let myPostDataElements = props.myPostsData.map(item => <Post message={item.message} count={item.count}/>)
    let addPost = ()=> {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());


    }
    let newPostElement = React.createRef();
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    }
    return (
        <div>
            <div>
                My Posts
            </div>
            <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={style.textarea}
            value={props.newPostText}/>
            </div>
            <button onClick={addPost} className={style.buttonAdd}>Add post</button>
            {myPostDataElements}
        </div>
    );
}

export default MyPosts;

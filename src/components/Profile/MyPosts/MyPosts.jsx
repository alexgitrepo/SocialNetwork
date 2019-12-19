import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let myPostDataElements = props.profilePage.myPostsData.map(item => <Post message={item.message} count={item.count}/>)
    let addPost = () => {
        props.addPostCallback();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.onPostChangeCallback(text)
    }
    return (
        <div>
            <div>
                My Posts
            </div>
            <div>
            <textarea onChange={onPostChange} className={style.textarea}
                      value={props.profilePage.newPostText}/>
            </div>
            <button onClick={addPost} className={style.buttonAdd}>Add post</button>
            {myPostDataElements}
        </div>
    );
}

export default MyPosts;

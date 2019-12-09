import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostDataElements = props.myPostsData.map(item => <Post message={item.message} count={item.count}/>)
    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea className={style.textarea}/>
            <button className={style.buttonAdd}>Add post</button>
            {myPostDataElements}
        </div>
    );
}

export default MyPosts;

import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
            My Posts
            </div>
            <textarea className={style.textarea}/>
            <button className={style.buttonAdd} >Add post</button>
            <Post message='HI man. Give me your bag' count='10'/>
            <Post message='What did you say? Crazy mother fucker!' count='20'/>
            <Post message='Mm. Goodbye ' count='0'/>
        </div>
           );
}

export default MyPosts;

import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostDataElements = props.myPostsData.map(item => <Post message={item.message} count={item.count}/>)
    let addPost = ()=> {
        let text = newPostElement.current.value;
        alert(text)
    }
    let newPostElement = React.createRef();
    return (
        <div>
            <div>
                My Posts
            </div>
            <div>
            <textarea ref={newPostElement} className={style.textarea}/>
            </div>
            <button onClick={addPost} className={style.buttonAdd}>Add post</button>
            {myPostDataElements}
        </div>
    );
}

export default MyPosts;

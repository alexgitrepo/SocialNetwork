import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let myPostDataElements = props.profilePage.myPostsData.map(item => <Post message={item.message}
                                                                             count={item.count}/>)
    const onSubmit = (formData) => {
        props.addPostCallback(formData)
    }
    return (
        <div>
            <div>
                My Posts
            </div>
            <div>
                <AddPostFormReduxForm onSubmit={onSubmit}/>
                {myPostDataElements}
            </div>
        </div>
    );
}
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"post"} placeholder={"Add post"}></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostFormReduxForm = reduxForm({form: "addPost"})(AddPostForm)

export default MyPosts;

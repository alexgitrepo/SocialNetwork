import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";


const MyPosts = React.memo(({addPostCallback,...props}) => {
    let myPostDataElements = props.profilePage.myPostsData.map((item,i) => <Post key={i} message={item.message}
                                                                             count={item.count}/>)
    const onSubmit = (formData) => {
        addPostCallback(formData)
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
})
const maxLength10=maxLengthCreator(10)
const AddPostForm = (props) => {
       return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required,maxLength10]}  component={Textarea} name={"post"} placeholder={"Add post"}/>
            <div>
                <button>Add Post</button>
            </div>
        </form>

    )
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset("addPost"))
const AddPostFormReduxForm = reduxForm({form: "addPost",onSubmitSuccess: afterSubmit})(AddPostForm)

export default MyPosts;

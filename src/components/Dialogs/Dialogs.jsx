import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import formatName from "redux-form/lib/util/prefixName";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let dialogsDataElements = props.dialogsPage.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageDataElements = props.dialogsPage.messageData.map(item => <Message message={item.message}/>)

    const onSubmit=(formData)=>{
        console.log(formData)
    props.addMessageCallback(formData)

}
    return (
        <main className={style.mainContent}>
            <div className={style.mainContentWrapper}>
                <section className={style.dialogs}>
                    {dialogsDataElements}
                </section>
                <section className={style.messages}>
                    {messageDataElements}
                    <div>
                        <AddMessageFormReduxForm onSubmit={onSubmit} />
                    </div>
                </section>

            </div>
        </main>
    );
}
const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} placeholder={"Add your message"} name={"message"}/>
        <div>
            <button>Add message</button>
        </div>
    </form>)

}

const AddMessageFormReduxForm = reduxForm({form: "AddMessageForm"})(AddMessageForm)

export default Dialogs;

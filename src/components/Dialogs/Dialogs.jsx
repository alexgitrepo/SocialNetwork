import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm,reset} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../validators/validators";


const  Dialogs = (props) => {
    let dialogsDataElements = props.dialogsPage.dialogsData.map((item,i) => <DialogItem key={i} name={item.name} id={item.id}/>)
    let messageDataElements = props.dialogsPage.messageData.map((item,i) => <Message key={i} message={item.message}/>)

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
const maxLength30=maxLengthCreator(30)
const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field validate={[required,maxLength30]} component={Textarea} placeholder={"Add your message"} name={"message"}/>
        <div>
            <button>Add message</button>
        </div>
    </form>)

}
const afterSubmit = (result, dispatch) =>
    dispatch(reset("AddMessageForm"))
const AddMessageFormReduxForm = reduxForm({form: "AddMessageForm",onSubmitSuccess: afterSubmit})(AddMessageForm)
export default Dialogs;

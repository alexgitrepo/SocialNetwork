import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {
    let dialogsDataElements = props.state.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageDataElements = props.state.messageData.map(item => <Message message={item.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        newMessageElement.current.value = ''
    }

    let onChangeMessage = () => {
        let newMessageText=newMessageElement.current.value ;
        props.dispatch(updateNewMessageActionCreator(newMessageText))
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
                    <textarea onChange={onChangeMessage} ref={newMessageElement} className={style.textarea}
                             value={props.state.newMessage}/>
                </div>
                <button onClick={addMessage} className={style.buttonAdd}>Add message</button>

            </section>

        </div>
    </main>


);
}

export default Dialogs;

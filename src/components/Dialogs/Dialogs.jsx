import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsDataElements = props.dialogsPage.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageDataElements = props.dialogsPage.messageData.map(item => <Message message={item.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.addMessageCallback();

    }

    let onChangeMessage = () => {
        let newMessageText=newMessageElement.current.value ;
        props.onChangeMessageCallback(newMessageText)
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
                             value={props.dialogsPage.newMessage}/>
                </div>
                <button onClick={addMessage} className={style.buttonAdd}>Add message</button>

            </section>

        </div>
    </main>


);
}

export default Dialogs;

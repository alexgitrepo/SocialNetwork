import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsDataElements =props.state.dialogsData.map(item=> <DialogItem name={item.name} id={item.id}/>)
    let messageDataElements =props.state.messageData.map(item=> <Message message={item.message} />)
    let newMessageElement = React.createRef()
    let addMessage = ()=> {
        let messageText=newMessageElement.current.value;
        props.addMessage(messageText);
        newMessageElement.current.value=''
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
                       <textarea ref={newMessageElement} className={style.textarea}/>
                   </div>
                   <button onClick={addMessage} className={style.buttonAdd}>Add message</button>

               </section>

           </div>
        </main>


    );
}

export default Dialogs;

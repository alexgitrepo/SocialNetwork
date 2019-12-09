import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsDataElements =props.state.dialogsData.map(item=> <DialogItem name={item.name} id={item.id}/>)
    let messageDataElements =props.state.messageData.map(item=> <Message message={item.message} />)
    return (
        <main className={style.mainContent}>
           <div className={style.mainContentWrapper}>
              <section className={style.dialogs}>
                 {dialogsDataElements}
              </section>
               <section className={style.messages}>
                   {messageDataElements}
               </section>
           </div>
        </main>


    );
}

export default Dialogs;

import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
const Dialogs = () => {
    return (
        <main className={style.mainContent}>
           <div className={style.mainContentWrapper}>
              <section className={style.dialogs}>
                  <Dialog name="Alex" id="1"/>
                  <Dialog name="Van'ka" id="2"/>
                  <Dialog name="MexaJIbI4" id="3"/>
                  <Dialog name="OJIEr" id="4"/>
                  <Dialog name="BacbKA" id="5"/>
              </section>
               <section className={style.messages}>
                   <Message message="HI MAN"/>
                   <Message message="How are You??"/>
                   <Message message="I am fine Thanks"/>
               </section>
           </div>
        </main>


    );
}

export default Dialogs;

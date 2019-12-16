import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessageCallback = () => {
        props.store.dispatch(addMessageActionCreator());

    }

    let onChangeMessageCallback = (newMessageText) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessageText))
    }

    return (

        <div>
            <Dialogs state={state} addMessageCallback={addMessageCallback}
                     onChangeMessageCallback={onChangeMessageCallback}/>
        </div>


    );
}

export default DialogsContainer;

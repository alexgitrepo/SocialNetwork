import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     let state = props.store.getState().dialogsPage
//
//     let addMessageCallback = () => {
//         props.store.dispatch(addMessageActionCreator());
//
//     }
//
//     let onChangeMessageCallback = (newMessageText) => {
//         props.store.dispatch(updateNewMessageActionCreator(newMessageText))
//     }
//
//     return (
//
//         <div>
//             <Dialogs state={state} addMessageCallback={addMessageCallback}
//                      onChangeMessageCallback={onChangeMessageCallback}/>
//         </div>
//
//
//     );
// }

let mapStateToProps = (state)=>{
    return{
    dialogsPage:state.dialogsPage}
}

let mapDispatchToProps =(dispatch)=>{
    return{
        addMessageCallback:()=>{
            dispatch(addMessageActionCreator())
        },
        onChangeMessageCallback:(newMessageText)=>{
            dispatch(updateNewMessageActionCreator(newMessageText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps )(Dialogs)

export default DialogsContainer;

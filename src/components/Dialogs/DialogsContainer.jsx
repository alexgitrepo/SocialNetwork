import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.userInfo.isLogin
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageCallback: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessageCallback: (newMessageText) => {
            dispatch(updateNewMessageActionCreator(newMessageText))
        }
    }
}

const DialogsToLogin = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsToLogin)

export default DialogsContainer;

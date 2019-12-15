const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";


let dialogsReducer=(state, action)=> {debugger
        if (action.type === ADD_MESSAGE) {
            let newestMessage = {id: 4, message: state.newMessage};
            state.messageData.push(newestMessage);
            state.newMessage = "";
                    }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            state.newMessage = action.newText;
        }
    return state
    }


export default dialogsReducer
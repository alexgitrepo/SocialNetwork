const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Van\'ka'},
        {id: 3, name: 'MexaJIbI4'}, {id: 4, name: 'OJIEr'}, {id: 5, name: 'BacbKA'}],
    messageData: [{id: 1, message: 'HI MAN'}, {id: 2, message: 'How are You??'}, {
        id: 3,
        message: 'I am fine Thanks'
    }],
    newMessage: ''}
let dialogsReducer=(state=initialState, action)=> {
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
export let updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})
export let addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer
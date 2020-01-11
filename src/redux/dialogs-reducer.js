const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Van\'ka'},
        {id: 3, name: 'MexaJIbI4'}, {id: 4, name: 'OJIEr'}, {id: 5, name: 'BacbKA'}],
    messageData: [{id: 1, message: 'HI MAN'}, {id: 2, message: 'How are You??'}, {
        id: 3,
        message: 'I am fine Thanks'
    }],

}
let dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newestMessage = {id: 4, message: action.formData.message};
        return {
            ...state, messageData: [...state.messageData, newestMessage],
        }
    }
    return state
}
export let addMessageActionCreator = (formData) => ({type: ADD_MESSAGE, formData})
export default dialogsReducer
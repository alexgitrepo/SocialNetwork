// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";
let storre = {
    _state: {
        profilePage: {
            myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
                {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
                {id: 3, message: 'Mm. Goodbye', count: '0'}],
            newPostText: ""
        },
        dialogsPage: {
            dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Van\'ka'},
                {id: 3, name: 'MexaJIbI4'}, {id: 4, name: 'OJIEr'}, {id: 5, name: 'BacbKA'}],
            messageData: [{id: 1, message: 'HI MAN'}, {id: 2, message: 'How are You??'}, {
                id: 3,
                message: 'I am fine Thanks'
            }],
            newMessage: ''

        }
    },
    _callSubscriber() {
        console.log("State changed")
    },


    getState() {
        return this._state
    }
    ,
    subscribe(observer) {
        this._callSubscriber = observer
    }


    ,
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    }
}


window.store = storre

export default storre
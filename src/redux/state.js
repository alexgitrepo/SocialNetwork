const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";
let store = {
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
        if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_POST) {
            let newPost = {id: 4, message: this._state.profilePage.newPostText, count: '20'};
            this._state.profilePage.myPostsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newestMessage = {id: 4, message: this._state.dialogsPage.newMessage};
            this._state.dialogsPage.messageData.push(newestMessage);
            this._state.dialogsPage.newMessage = "";
            this._callSubscriber(this._state)
        }
    }
}
 export let updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
});
export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewMessageActionCreator =(text)=> ({type:UPDATE_NEW_MESSAGE, newText: text})
export let addMessageActionCreator =()=> ({type:ADD_MESSAGE})
window.store = store

export default store
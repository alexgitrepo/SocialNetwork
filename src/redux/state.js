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

        }},
        _callSubscriber() {
            console.log("State changed")
        },


        getState() {
            return this._state
        }
        ,
        subscribe(observer) {debugger
            this._callSubscriber = observer
        }
        ,
        updateNewPost(newText) {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state)
        }
        ,
        addPost() {
            let newPost = {id: 4, message: this._state.profilePage.newPostText, count: '20'};
            this._state.profilePage.myPostsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        },
        updateNewMessage(newText) {
            this._state.dialogsPage.newMessage = newText;
            this._callSubscriber(this._state)
        }
        ,
        addMessage() {
            let newestMessage = {id: 4, message: this._state.dialogsPage.newMessage};
            this._state.dialogsPage.messageData.push(newestMessage);
            this._state.dialogsPage.newMessage = "";
            this._callSubscriber(this._state)
        }


    }

export default store
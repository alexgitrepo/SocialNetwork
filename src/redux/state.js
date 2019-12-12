import rerenderEntireTree from "../render";

let state = {
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
        newMessage:''

    }
}
window.state=state;

export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)

}

export let addPost = () => {
    let newPost = {id: 4, message: state.profilePage.newPostText, count: '20'};
    state.profilePage.myPostsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}
export let updateNewMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
        rerenderEntireTree(state)}

export let addMessage = () => {
    let newestMessage = {id: 4, message: state.dialogsPage.newMessage};
    state.dialogsPage.messageData.push(newestMessage);
    state.dialogsPage.newMessage = "";
    rerenderEntireTree(state)
}

export default state
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_CURRENT_USER='SET_CURRENT_USER'
let initialState = {
    myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
        {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
        {id: 3, message: 'Mm. Goodbye', count: '0'}],
    newPostText: "",
    currentUser:null
}
let profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {id: 4, message: state.newPostText, count: '20'};
        return {...state, newPostText: '', myPostsData:[...state.myPostsData, newPost]}
        // state.myPostsData.push(newPost);
        // state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        return {...state, newPostText: action.newText}
    }
    else if (action.type === SET_CURRENT_USER) {
        return {...state, currentUser: action.currentUser}
    }
    return state
}
export let updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
});
export let addPostActionCreator = () => ({type: ADD_POST})
export let setCurrentUserCallback=(currentUser)=>({type:SET_CURRENT_USER,currentUser })

export default profileReducer
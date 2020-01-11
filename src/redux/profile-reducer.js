import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
        {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
        {id: 3, message: 'Mm. Goodbye', count: '0'}],
    newPostText: "",
    currentUser: null,
    status: 'S'
}
let profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {id: 4, message: state.newPostText, count: '20'};
        return {...state, newPostText: '', myPostsData: [...state.myPostsData, newPost]}
        // state.myPostsData.push(newPost);
        // state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        return {...state, newPostText: action.newText}
    } else if (action.type === SET_CURRENT_USER) {
        return {...state, currentUser: action.currentUser}
    } else if (action.type === SET_STATUS) {debugger
        return {...state, status: action.status}
    }
    return state
}
export let updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
});
export let addPostActionCreator = () => ({type: ADD_POST})
export let setStatusActionCreator = (status) => ({type: SET_STATUS, status})
export let setCurrentUserCallback = (currentUser) => ({type: SET_CURRENT_USER, currentUser})
export let setCurrentUserThunkCreator = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(
        (response) => {
            dispatch(setCurrentUserCallback(response.data))

        })
}
export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(
        (response) => {
            dispatch(setStatusActionCreator(response.data))
        })
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
    debugger
    profileAPI.updateStatus(status).then(
        (response) => {debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
}

export default profileReducer
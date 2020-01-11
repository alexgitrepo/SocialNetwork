import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "ADD_POST";
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
        {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
        {id: 3, message: 'Mm. Goodbye', count: '0'}],
    currentUser: null,
    status: 'S'
}
let profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {id: 4, message: action.formData.post, count: '20'};
        return {...state, myPostsData: [...state.myPostsData, newPost]}
        // state.myPostsData.push(newPost);
        // state.newPostText = '';
    } else if (action.type === SET_CURRENT_USER) {
        return {...state, currentUser: action.currentUser}
    } else if (action.type === SET_STATUS) {

        return {...state, status: action.status}
    }
    return state
}
export let addPostActionCreator = (formData) => ({type: ADD_POST, formData})
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
        (response) => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
}

export default profileReducer
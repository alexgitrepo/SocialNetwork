import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "profile/ADD_POST";
const SET_CURRENT_USER = 'profile/SET_CURRENT_USER'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
let initialState = {
    myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
        {id: 2, message: 'What did you say?!', count: '20'},
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
    } else if (action.type === DELETE_POST) {
        return {...state, myPostsData: state.myPostsData.filter((item) => item.id !== action.id)}
    } else if (action.type === SET_STATUS) {

        return {...state, status: action.status}
    } else if (action.type === SAVE_PHOTO_SUCCESS) {

        return {...state, currentUser: {...state.currentUser, photos: action.photos}}
    }
    return state
}
export let addPostActionCreator = (formData) => ({type: ADD_POST, formData})
export let deletePost = (id) => ({type: DELETE_POST, id})
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
    profileAPI.updateStatus(status).then(
        (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const changeProfileDataThunkCreator = (newProfileData, userId) => async (dispatch) => {
    let response = await profileAPI.changeProfileData(newProfileData)
    if (response.data.resultCode === 0) {
        dispatch(setCurrentUserThunkCreator(userId))
    }

    if (response.data.resultCode !== 0) {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        let action = stopSubmit("ProfileChangeForm", {_error: message})
        dispatch(action)
        return Promise.reject()
    }
}

export default profileReducer
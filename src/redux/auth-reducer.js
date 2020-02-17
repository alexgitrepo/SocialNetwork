import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const AUTH_USER = "auth/AUTH_USER";

let initialState = {
    userInfo: {
        id: null,
        login: null,
        email: null,
        isLogin: false
    }
}
let authReducer = (state = initialState, action) => {
    if (action.type === AUTH_USER) {
        return {
            ...state, userInfo: {
                ...action.userInfo, id: action.id,
                login: action.login,
                email: action.email,
                isLogin: action.isLogin
            }
        }

    }
    return state
}


export const setLoginUserDataActionCreator = (email, id, login, isLogin) => ({
    type: AUTH_USER,
    email,
    id,
    login,
    isLogin
})
export const sendLoginDataRequest = (email, password, rememberMe) => async (dispatch) => {
    debugger
    let request = await authAPI.login(email, password, rememberMe)
    if (request.data.resultCode === 0) {
        let response = await authAPI.getAuthStatus();
        if (response.data.resultCode === 0) {
            const {email, id, login} = response.data.data
            dispatch(setLoginUserDataActionCreator(email, id, login, true))
        }
    } else {
        let message = request.data.messages.length > 0 ? request.data.messages[0] : 'some error'
        let action = stopSubmit("login", {_error: message})
        dispatch(action)
    }
}

export const sendLogoutRequest = () => async (dispatch) => {
    let request = await authAPI.logout()
    if (request.data.resultCode === 0) {
        dispatch(setLoginUserDataActionCreator(null, null, null, false))
    }
}


export const getAuthStatusThunkCreator = () => (dispatch) => {
    return  authAPI.getAuthStatus().then(
        (response) => {
            if (response.data.resultCode === 0) {
                const {email, id, login} = response.data.data
                dispatch(setLoginUserDataActionCreator(email, id, login, true))
            }
        })
}

export default authReducer
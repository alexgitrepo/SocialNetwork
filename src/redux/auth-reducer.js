import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const AUTH_USER = "auth/AUTH_USER";
const SET_CAPTCHA_URL='auth/SET_CAPTCHA_URL'
let initialState = {
    userInfo: {
        id: null,
        login: null,
        email: null,
        isLogin: false
    },
    captchaUrl:""
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
    else if(action.type === SET_CAPTCHA_URL){
        return {...state,captchaUrl:action.url}
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

export const setCaptchaUrl=(url)=>({type:SET_CAPTCHA_URL,url})
export const sendLoginDataRequest = (email, password, rememberMe,captcha) => async (dispatch) => {
    debugger
    let request = await authAPI.login(email, password, rememberMe,captcha)
    if (request.data.resultCode === 0) {
        let response = await authAPI.getAuthStatus();
        if (response.data.resultCode === 0) {
            const {email, id, login} = response.data.data
            dispatch(setLoginUserDataActionCreator(email, id, login, true))
            dispatch(setCaptchaUrl(""))
        }
    }
    if (request.data.resultCode === 10) {
        let response = await authAPI.getCaptcha();
        if (response) {
            dispatch(setCaptchaUrl(response.data.url))
            let message = request.data.messages.length > 0 ? request.data.messages[0] : 'some error'
            let action = stopSubmit("login", {_error: message})
            dispatch(action)
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
    return authAPI.getAuthStatus().then(
        (response) => {
            if (response.data.resultCode === 0) {
                const {email, id, login} = response.data.data
                dispatch(setLoginUserDataActionCreator(email, id, login, true))
            }
        })
}

export default authReducer
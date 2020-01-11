import {authAPI} from "../API/api";

const AUTH_USER = "AUTH_USER";

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
            ...state, userInfo: {...action.userData, isLogin: true}
        }

    }
    return state
}


export const setLoginUserDataActionCreator = (userData) => ({type: AUTH_USER, userData:userData})
export const  getAuthStatusThunkCreator=()=>(dispatch)=>{
    authAPI.getAuthStatus().then(
        (response) => {
            if (response.data.resultCode===0){
                dispatch(setLoginUserDataActionCreator(response.data.data))}
        })}

export default authReducer
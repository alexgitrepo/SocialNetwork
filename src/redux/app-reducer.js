import {getAuthStatusThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {initialized: false}
let appReducer = (state = initialState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state, initialized: true
        }
    }
    return state
}

export const initializeSuccess=()=>({type:INITIALIZED_SUCCESS})
export const initializeApp=()=>(dispatch)=>{
    let promise= dispatch(getAuthStatusThunkCreator())
    promise.then(()=>{dispatch(initializeSuccess())})

}
export default appReducer


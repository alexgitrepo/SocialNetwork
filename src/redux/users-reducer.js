const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS="SET_USERS"
let initialState = {
    users: []
}


let usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state, users: state.users.map((item) => {
                if (item.id === action.userId) {
                    item.followed = true
                }
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state, users:state.users.map((item) => {
                if (item.id === action.userId) {
                    item.followed = false
                }
            })
        }
    }
    else if (action.type === SET_USERS) {
        return {
        ...state,users:[...action.users]
        }
    }
    return state
}
export let followUserActionCreator = (id) => ({type: FOLLOW, userId: id})
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW, userId: id})
export let setUsersActionCreator=(users)=>({type: SET_USERS, users:users})

export default usersReducer
import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utis/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_PAGES = 'users/SET_TOTAL_PAGES'
const SET_PAGES_ON_SCREEN_NEXT = 'users/SET_PAGES_ON_SCREEN_NEXT'
const SET_PAGES_ON_SCREEN_PREV = 'users/SET_PAGES_ON_SCREEN_PREV'
const IS_FETCHING_CHANGE = 'users/IS_FETCHING_CHANGE'
const IS_FOLLOWING_IN_PROCESS = 'users/IS_FOLLOWING_IN_PROCESS'
let initialState = {
    users: [],
    totalUsers: 0,
    currentPage: 1,
    usersPerPage: 7,
    totalPages: 1,
    pagesOnScreenTo: 5,
    pagesOnScreenFrom: 1,
    isFetching: false,
    isFollowingInProcess: false,
    isFollowingInProcessUsers: []
}


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", {followed: true})

            }
        case UNFOLLOW : {
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                }

        }
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }

        }
        case SET_TOTAL_USERS: {
            return {
                ...state, totalUsers: action.count
            }

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page
            }

        }
        case SET_TOTAL_PAGES: {
            let pagesCount = Math.ceil(state.totalUsers / state.usersPerPage);

            return {
                ...state, totalPages: pagesCount
            }
        }
        case SET_PAGES_ON_SCREEN_NEXT: {
            let pagesCountFrom = state.pagesOnScreenFrom += 5
            let pagesCountTo = state.pagesOnScreenTo += 5
            return {
                ...state, pagesOnScreenFrom: pagesCountFrom, pagesOnScreenTo: pagesCountTo
            }
        }
        case SET_PAGES_ON_SCREEN_PREV: {
            let pagesCountFrom = state.pagesOnScreenFrom -= 5
            let pagesCountTo = state.pagesOnScreenTo -= 5
            return {
                ...state, pagesOnScreenFrom: pagesCountFrom, pagesOnScreenTo: pagesCountTo
            }
        }
        case IS_FETCHING_CHANGE: {
            debugger

            let newIsFetching = !state.isFetching

            return {
                ...state, isFetching: newIsFetching
            }
        }
        case IS_FOLLOWING_IN_PROCESS: {
            if (state.isFollowingInProcessUsers.some((item) => item === action.userId)) {
                return {
                    ...state, isFollowingInProcessUsers:
                        [state.isFollowingInProcessUsers.filter((item) => item !== action.userId)]
                }
            } else return {
                ...state, isFollowingInProcessUsers: [...state.isFollowingInProcessUsers, action.userId]
            }

        }
    }
    return state
}

export let followCallback = (id) => ({type: FOLLOW, userId: id})
export let unfollowCallback = (id) => ({type: UNFOLLOW, userId: id})
export let setUsersCallback = (users) => ({type: SET_USERS, users: users})
export let setTotalUsersCallback = (count) => ({type: SET_TOTAL_USERS, count: count})
export let setCurrentPageCallback = (page) => ({type: SET_CURRENT_PAGE, page: page})
export let setTotalPagesCallback = () => ({type: SET_TOTAL_PAGES})
export let setPagesOnScreenNextCallback = () => ({type: SET_PAGES_ON_SCREEN_NEXT})
export let setPagesOnScreenPrevCallback = () => ({type: SET_PAGES_ON_SCREEN_PREV})
export let changeIsFetchingCallback = () => ({type: IS_FETCHING_CHANGE})
export let changeIsisFollowingInProcess = (userId) => ({type: IS_FOLLOWING_IN_PROCESS, userId})

export let getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(changeIsFetchingCallback())
    let response = await usersAPI.getUsers(currentPage, pageSize)
    if (response) {
        dispatch(setUsersCallback(response.data.items));
        dispatch(setTotalUsersCallback(response.data.totalCount));
        dispatch(setTotalPagesCallback())
        dispatch(setCurrentPageCallback(currentPage))
        dispatch(changeIsFetchingCallback())
    }

}

let followUserHelpFunction = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(changeIsisFollowingInProcess(userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(changeIsisFollowingInProcess(userId))

    }
}

export let followUserThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    followUserHelpFunction(userId, dispatch, apiMethod, followCallback)
}

export let unfollowUserThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    followUserHelpFunction(userId, dispatch, apiMethod, unfollowCallback)
}


export default usersReducer
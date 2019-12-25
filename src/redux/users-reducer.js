const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const SET_PAGES_ON_SCREEN_NEXT = 'SET_PAGES_ON_SCREEN_NEXT'
const SET_PAGES_ON_SCREEN_PREV='SET_PAGES_ON_SCREEN_PREV'
let initialState = {
    users: [],
    totalUsers: 0,
    currentPage: 1,
    usersPerPage: 7,
    totalPages: 1,
    pagesOnScreenTo: 5,
    pagesOnScreenFrom: 1
}


let usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state, users: state.users.map((item) => {
                    if (item.id === action.userId) {
                        return {...item, followed: true}
                    } else {
                        return item
                    }
                }
            )
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state, users: state.users.map((item) => {
                if (item.id === action.userId) {
                    return {...item, followed: false}

                } else {
                    return item
                }

            })
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state, users: [...action.users]
        }

    } else if (action.type === SET_TOTAL_USERS) {
        return {
            ...state, totalUsers: action.count
        }

    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state, currentPage: action.page
        }

    } else if (action.type === SET_TOTAL_PAGES) {
        let pagesCount = Math.ceil(state.totalUsers / state.usersPerPage);

        return {
            ...state, totalPages: pagesCount
        }
    } else if (action.type === SET_PAGES_ON_SCREEN_NEXT) {
        let pagesCountFrom = state.pagesOnScreenFrom += 5
        let pagesCountTo=state.pagesOnScreenTo+=5
        return {
            ...state, pagesOnScreenFrom: pagesCountFrom, pagesOnScreenTo:pagesCountTo
        }
    }
    else if (action.type === SET_PAGES_ON_SCREEN_PREV) {
        let pagesCountFrom = state.pagesOnScreenFrom -= 5
        let pagesCountTo=state.pagesOnScreenTo-=5
        return {
            ...state, pagesOnScreenFrom: pagesCountFrom, pagesOnScreenTo:pagesCountTo
        }
    }


    return state
}
export let followUserActionCreator = (id) => ({type: FOLLOW, userId: id})
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW, userId: id})
export let setUsersActionCreator = (users) => ({type: SET_USERS, users: users})
export let setTotalUsersActionCreator = (count) => ({type: SET_TOTAL_USERS, count: count})
export let setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page: page})
export let setTotalPagesActionCreator = () => ({type: SET_TOTAL_PAGES})
export let setPagesOnScreenNextActionCreator = () => ({type: SET_PAGES_ON_SCREEN_NEXT})
export let setPagesOnScreenPrevActionCreator = () => ({type: SET_PAGES_ON_SCREEN_PREV})



export default usersReducer
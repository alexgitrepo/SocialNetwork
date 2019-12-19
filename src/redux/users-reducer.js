const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [{
        id: 1, ava: "", fullName: 'Alex', followed: true, satus: 'I amm THE KING OF REACT', location: {
            country: "Russia", city: "Perm"
        }
    },
        {
            id: 2, ava: "", fullName: 'Dimych', followed: true, satus: 'It GURU', location: {
                country: "Belarus", city: "Minsk"
            }
        },
        {
            id: 3, ava: "", fullName: 'Artem', followed: false, satus: 'It Valenok', location: {
                country: "Belarus", city: "Minsk"
            }
        }
    ]
}


let usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state, ...state.users.map((item) => {
                if (item.id === action.userId) {
                    item.followed = true
                }
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state, ...state.users.map((item) => {
                if (item.id === action.userId) {
                    item.followed = false
                }
            })
        }
    }
    return state
}
export let followUserActionCreator = (id) => ({type: FOLLOW, userId: id})
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW, userId: id})

export default usersReducer
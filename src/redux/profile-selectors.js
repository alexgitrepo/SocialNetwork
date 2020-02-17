export const getProfilePage=(state)=>{
    return state.profilePage
}
export const getIsAuth=(state)=>{ return state.auth.userInfo.isLogin}
export const  getCurrentUserId=(state)=>{return state.auth.userInfo.id }
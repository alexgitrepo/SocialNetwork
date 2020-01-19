import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY": "2e11e55a-6317-486e-b332-4118c5f8bf85"},
})

export const usersAPI = {
    getUsers: (currentPage = 1, Pagesize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${Pagesize}`)

    },
    follow: (userId) => {

        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId)=>{
        return profileAPI.getProfile(userId)
    }
}

export const authAPI ={
    getAuthStatus:()=>{
        return instance.get('auth/me')
    },
    login:(email,password,rememberMe)=>{
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout:()=>{
        return instance.delete('auth/login')
    }
}

export const profileAPI={
    getProfile: (userId)=>{
        return instance.get(`profile/${userId}`)
},
getStatus:(userId)=>{
    return instance.get(`profile/status/${userId}`)
},
updateStatus:(newStatus)=>{
        return instance.put('profile/status', {status:newStatus})
}}


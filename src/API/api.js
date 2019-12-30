import * as axios from "axios";

const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    "API-KEY":"2e11e55a-6317-486e-b332-4118c5f8bf85"
})

export const usersAPI={
    getUsers:(currentPage=1,Pagesize=10)=>{
return instance.get(`users?page=${currentPage}&count=${Pagesize}`)

    }
}

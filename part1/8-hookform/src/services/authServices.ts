import http from "./http"

import { type IUser } from "../types/user-interface"


type LoginUser=Omit<IUser,"name"|"role"|"avatar">

export const sendUserData=({email,name,password,avatar}:IUser)=>{
return http.post("/users",{email,name,password,avatar}).then(({data})=>data);
};


export const sendUserLoginData=({email,password}:LoginUser)=>{
return http.post("/auth/login",{email,password}).then(({data})=>data);
};



export const getUser=()=>{
    return http.get("/auth/profile").then(({data})=>data || false);
};










import http from "./http"



export const getUser=()=>{
    return http.get("auth/user/whoami")
};
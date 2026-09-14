import http from "./http"



export const getUser=()=>{
    return http.get("user/whoami")
};
import http from "./http"

export const getAllProducts=()=>{
    return http.get("/products").then(({data})=>data);
};